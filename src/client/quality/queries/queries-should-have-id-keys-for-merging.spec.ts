/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Queries should use idKeys when using map reduce.
 */
import { forAllActions, forAllViews, getBuild } from '../../loader';
import { assert } from 'chai';
import 'mocha';

describe( 'Queries - Queries should use idKeys for merging data when using map reduce', () => {
  // Get the build.
  let build: any = getBuild( process.argv, process.cwd() );

  const checkIdKeys = ( query: any ): void => {
    // If the query has projections with reduce, then we should have idKeys.
    if ( query.projections ) {
      assert( query.projections.reduce == null || ( query.idKeys != null && query.idKeys.length > 0 ),
        'Queries with reduce projections should have idKeys to support merging of local results' );

      // Ensure the idKeys exist in the results.
      if ( query.idKeys != null && query.idKeys.length > 0 ) {
        // Keys available to be used as id.
        let availableKeys: string[];

        // If we have reduce in projections, then the keys should exist there.
        // Otherwise, take the keys from map.values in projections.
        if ( query.projections.reduce ) availableKeys = Object.keys( query.projections.reduce );
        else availableKeys = query.projections.map.values;

        for ( let k = 0; k < query.idKeys.length; k++ ) {
          let f: string = query.idKeys[ k ];
          assert( availableKeys.indexOf( f ) >= 0, 'ID key ' + f
            + ' does not exist in the result with keys ' + availableKeys );
        }
      }
    } else {
      // If there are no projections, we should not use idKeys.
      assert( query.idKeys == null || query.idKeys.length === 0,
        'If there are no projections, idKeys should not be used' );
    }
  }

  // Given an array of actions, ensure there are limits on loadData
  const checkActions = ( actions: any[] ): void => {
    for ( let j = 0; j < actions.length; j++ ) {
      let a: any = actions[ j ];

      // If we have a loadData ensure it has a limit
      if ( a.task === 'loadData' ) {
        checkIdKeys( a.data );
      }
    }
  }

  // Get all the actions.
  forAllActions( build, ( t: string, s: string, ss: string, i: number,
    actionType: string, actions: any[], errorActions: any ) => {

    it( actionType + ': /' + t + '/' + s + '/' + ss + '[' + i + ']' , () => {
      checkActions( actions );

      if ( errorActions ) {
        let keys: string[] = Object.keys( errorActions );
        for ( let j = 0; j < keys.length; j++ ) {
          checkActions( errorActions[ keys[ j ] ] );
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
        checkIdKeys( view.data );
      }
    });
  });
});
