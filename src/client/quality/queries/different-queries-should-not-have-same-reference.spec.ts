/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Different queries should not have the same reference.
 */
import { ObjectSerializer } from '../../../common/ObjectSerializer';
import { forAllActions, forAllViews, getBuild } from '../../loader';
import { assert } from 'chai';
import 'mocha';

describe( 'Queries - Different queries should not use same reference key', () => {
  // Get the build.
  let build: any = getBuild( process.argv, process.cwd() );
  let referenceKeyMap: Map<string, any> = new Map<string, any>();
  let serializer = new ObjectSerializer();

  const checkReferenceKey = ( query: any, summary: string, idx?: number ): void => {
    let prefix: string = idx ? 'Step ' + idx + ': ' : '';

    // Get query reference.
    let ref: string = typeof query.reference === 'string' ? query.reference : query.reference.toString();

    // If the reference for this query already exists.
    let data: any = referenceKeyMap.get( ref + query.branch );

    // We have found the data so need to compare our current query with it.
    if ( data ) {
      // Get the query string for this query.
      let q: string = serializer.serialize( query );

      assert( q === data.query,
        prefix + 'Same reference is used for a different query at: ' + data.url );
    } else {
      // Add a new entry to the map.
      referenceKeyMap.set( ref + query.branch, {
        query: serializer.serialize( query ),
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
