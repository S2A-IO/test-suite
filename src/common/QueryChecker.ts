/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Common function used for query checks on client and server side.
 */
import { assert } from 'chai';

import { ObjectSerializer } from './ObjectSerializer';

/**
 * Check limit in a query. We want to have limits in all queries. We also want
 * to keep overall result size to a minimum.
 *
 * @param {any} query           Query we are checking.
 * @param {number} idx          Index for the action which executes this query,
 *                              if applicable.
 *
 * @returns {undefined} None.
 */
export const checkQueryLimit = ( query: any, idx?: number ): void => {
  const prefix: string = idx ? 'Step ' + idx + ': ' : '';

  assert( query.limit != null, prefix + 'Queries should enforce a data limit' );

  if ( query.limit ) {
    assert( query.limit <= 100, prefix + 'Query limits should not exceed 100' );
  }
};

/**
 * Check refresh time in a query. We want to have the maximum refresh time possible.
 * At a minimum we want to have a refresh time of 5 mins.
 *
 * @param {any} query           Query we are checking.
 * @param {number} idx          Index for the action which executes this query,
 *                              if applicable.
 *
 * @returns {undefined} None.
 */
export const checkQueryRefreshTime = ( query: any, idx?: number ): void => {
  const prefix: string = idx ? 'Step ' + idx + ': ' : '';
  assert( query.refresh >= 300, prefix + 'Query should have refresh time greater than 300 seconds' );
};

/**
 * Check reference in a query. We want to combine similar queries to have the same
 * results with the same reference for optimal cache usage.
 *
 * @param {any} query             Query we are checking.
 * @param {string} summary        Summary of the context where query is executed.
 * @param {Map<string, any>} map  Map of queries already processed.
 * @param {number} idx            Index for the action which executes this query,
 *                                if applicable.
 *
 * @returns {undefined} None.
 */
export const checkSimilarQueries = ( query: any, summary: string,
  map: Map<string, any>, idx?: number ): void => {
  const prefix: string = idx ? 'Step ' + idx + ': ' : '';
  const serializer = new ObjectSerializer();

  // Create string from main query parts.
  let qString: string = query.branch === 'string' ? query.branch : query.branch.toString();
  qString += serializer.serialize( query.query );
  qString += serializer.serialize( query.filters );
  qString += query.self;

  // If map entry for this query already exists.
  const data: any = map.get( qString );

  // We have found the data so need to compare our current query with it.
  if ( data ) {
    assert( query.reference === data.query.reference,
      prefix + 'Similar query is used with a different reference at: ' + data.url );
  } else {
    // Add a new entry to the map.
    map.set( qString, {
      query: query,
      url: summary + ' ' + prefix
    });
  }
};

/**
 * For queries with limits greater than 10, we want to enforce projections.
 *
 * @param {any} query           Query we are checking.
 * @param {number} idx          Index for the action which executes this query,
 *                              if applicable.
 *
 * @returns {undefined} None.
 */
export const checkQueryLimitProjections = ( query: any, idx?: number ): void => {
  const prefix: string = idx ? 'Step ' + idx + ': ' : '';

  if ( query.limit > 10 ) {
    assert( query.map != null && query.map.values.length > 0,
      prefix + 'Use map.values in queries to reduce data size.' );
  }
};

/**
 * Check reference in a query. We want to combine similar queries to have the same
 * results with the same reference for optimal cache usage.
 *
 * @param {any} query             Query we are checking.
 * @param {string} summary        Summary of the context where query is executed.
 * @param {Map<string, any>} map  Map of queries already processed.
 * @param {number} idx            Index for the action which executes this query,
 *                                if applicable.
 *
 * @returns {undefined} None.
 */
export const checkQueryReferenceKey = ( query: any, summary: string,
  map: Map<string, any>, idx?: number ): void => {
  const prefix: string = idx ? 'Step ' + idx + ': ' : '';
  const serializer = new ObjectSerializer();

  // Get query reference.
  const ref: string = typeof query.reference === 'string' ? query.reference : query.reference.toString();
  const branch: string = typeof query.branch === 'string' ? query.branch : query.branch.toString();

  // If the reference for this query already exists.
  const data: any = map.get( ref + branch );

  // We have found the data so need to compare our current query with it.
  if ( data ) {
    // Get the query string for this query.
    const q: string = serializer.serialize( query );

    assert( q === data.query,
      prefix + 'Same reference is used for a different query at: ' + data.url );
  } else {
    // Add a new entry to the map.
    map.set( ref + branch, {
      query: serializer.serialize( query ),
      url: summary + ' ' + prefix
    });
  }
};

/**
 * Check filters in a query. Ensure referenceFields when filters are present.
 * Also ensure correct use of the referenceFields.
 *
 * @param {any} query           Query we are checking.
 * @param {number} idx          Index for the action which executes this query,
 *                              if applicable.
 *
 * @returns {undefined} None.
 */
export const checkQueryFilters = ( query: any, idx?: number ): void => {
  const prefix: string = idx ? 'Step ' + idx + ': ' : '';
  const keys: string[] = Object.keys( query.filters );

  // If there are filters, ensure there are filter reference fields.
  if ( keys.length > 0 ) {
    assert( query.referenceFields.length > 0, prefix +
      'Queries with filters should have reference fields' );

    // Ensure the reference fields exist in the filter.
    for ( let k = 0; k < query.referenceFields.length; k++ ) {
      const f: string = query.referenceFields[ k ];
      assert( query.filters[ f ] != null, prefix +
        'Filter reference key ' + f + ' does not exist' );
    }
  }
};

/**
 * Check idKeys in queries to ensure local and remote results are merged correctly.
 *
 * @param {any} query           Query we are checking.
 * @param {number} idx          Index for the action which executes this query,
 *                              if applicable.
 *
 * @returns {undefined} None.
 */
export const checkQueryIdKeys = ( query: any, idx?: number ): void => {
  const prefix: string = idx ? 'Step ' + idx + ': ' : '';

  // If the query has projections with reduce, then we should have idKeys.
  if ( query.projections ) {
    assert( query.projections.reduce == null || ( query.idKeys != null && query.idKeys.length > 0 ),
      prefix + 'Queries with reduce projections should have idKeys to support merging of local results' );

    // Ensure the idKeys exist in the results.
    if ( query.idKeys != null && query.idKeys.length > 0 ) {
      // Keys available to be used as id.
      let availableKeys: string[];

      // If we have reduce in projections, then the keys should exist there.
      // Otherwise, take the keys from map.values in projections.
      if ( query.projections.reduce ) availableKeys = Object.keys( query.projections.reduce );
      else availableKeys = query.projections.map.values;

      for ( let k = 0; k < query.idKeys.length; k++ ) {
        const f: string = query.idKeys[ k ];
        assert( availableKeys.indexOf( f ) >= 0, prefix + 'ID key ' + f
          + ' does not exist in the result with keys ' + availableKeys );
      }
    }
  } else {
    // If there are no projections, we should not use idKeys.
    assert( query.idKeys == null || query.idKeys.length === 0,
      prefix + 'If there are no projections, idKeys should not be used' );
  }
};
