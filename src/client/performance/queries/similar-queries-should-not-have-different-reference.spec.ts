/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Similar queries should not have the different references for improved
 * caching.
 */
import { ObjectSerializer } from '../../../common/ObjectSerializer';
import { forAllActions, forAllViews, getBuild } from '../../loader';
import { assert } from 'chai';
import 'mocha';

describe( 'Queries - Similar queries should not use different reference keys', () => {
  // Get the build.
  let build: any = getBuild( process.argv, process.cwd() );
  let queryMap: Map<string, any> = new Map<string, any>();
  let serializer = new ObjectSerializer();

  const checkReferenceKey = ( query: any, summary: string, idx?: number ): void => {
    let prefix: string = idx ? 'Step ' + idx + ': ' : '';

    // Create string from main query parts.
    let qString: string = query.branch === 'string' ? query.branch : query.branch.toString();
    qString += serializer.serialize( query.query );
    qString += serializer.serialize( query.filters );
    qString += query.self;

    // If map entry for this query already exists.
    let data: any = queryMap.get( qString );

    // We have found the data so need to compare our current query with it.
    if ( data ) {
      assert( query.reference === data.query.reference,
        prefix + 'Similar query is used with a different reference at: ' + data.url );
    } else {
      // Add a new entry to the map.
      queryMap.set( qString, {
        query: query,
        url: summary + ' ' + prefix
      })
    }
  }

  // Given an array of actions, find loadData queries.
  const checkActions = ( actions: any[], summary: string ): void => {
    for ( let j = 0; j < actions.length; j++ ) {
      let a: any = actions[ j ];

      // If we have a loadData, execute checks on it.
      if ( a.task === 'loadData' ) {
        checkReferenceKey( a.data, summary, j );
      }
    }
  }

  // Get all the actions.
  forAllActions( build, ( t: string, s: string, ss: string, i: number,
    actionType: string, actions: any[], errorActions: any ) => {

    it( actionType + ': /' + t + '/' + s + '/' + ss + '[' + i + ']' , () => {
      checkActions( actions, actionType + ': /' + t + '/' + s + '/' + ss + '[' + i + ']' );

      if ( errorActions ) {
        let keys: string[] = Object.keys( errorActions );
        for ( let j = 0; j < keys.length; j++ ) {
          checkActions( errorActions[ keys[ j ] ], actionType + ' (onError): /' + t + '/' + s + '/' + ss + '[' + i + ']' );
        }
      }
    });
  });

  // Get all the data constructs for views.
  forAllViews( build, null, ( t: string, s: string, ss: string, i: number ) => {
    it( 'Data: /' + t + '/' + s + '/' + ss + '[' + i + ']' , () => {
      let view: any = build.urls[ t ][ s ].sections[ ss ][ i ];

      // If the view has a data construct.
      if ( view.data ) {
        checkReferenceKey( view.data, 'Data: /' + t + '/' + s + '/' + ss + '[' + i + ']' );
      }
    });
  });
});
