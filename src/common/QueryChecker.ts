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
  let prefix: string = idx ? 'Step ' + idx + ': ' : '';

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
  let prefix: string = idx ? 'Step ' + idx + ': ' : '';
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
export const checkQueryReferenceKey = ( query: any, summary: string,
  map: Map<string, any>, idx?: number ): void => {
  let prefix: string = idx ? 'Step ' + idx + ': ' : '';
  let serializer = new ObjectSerializer();

  // Create string from main query parts.
  let qString: string = query.branch === 'string' ? query.branch : query.branch.toString();
  qString += serializer.serialize( query.query );
  qString += serializer.serialize( query.filters );
  qString += query.self;

  // If map entry for this query already exists.
  let data: any = map.get( qString );

  // We have found the data so need to compare our current query with it.
  if ( data ) {
    assert( query.reference === data.query.reference,
      prefix + 'Similar query is used with a different reference at: ' + data.url );
  } else {
    // Add a new entry to the map.
    map.set( qString, {
      query: query,
      url: summary + ' ' + prefix
    })
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
  let prefix: string = idx ? 'Step ' + idx + ': ' : '';

  if ( query.limit > 10 ) {
    assert( query.map != null && query.map.values.length > 0,
      prefix + 'Use map.values in queries to reduce data size.' );
  }
};
