/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Queries should have a limit that does not exceed 100.
 */
import { forAllActions, forAllViews, getBuild } from '../../loader';
import { assert } from 'chai';
import 'mocha';

describe( 'Queries Performance - Queries should have a limit that does not exceed 100', () => {
  // Get the build.
  let build: any = getBuild( process.argv, process.cwd() );

  // Given an array of actions, ensure there are no networking operations before
  // a redirect
  const checkActions = ( actions: any[] ): void => {
    for ( let j = 0; j < actions.length; j++ ) {
      let a: any = actions[ j ];

      // If we have a loadData ensure it has a limit
      if ( a.task === 'loadData' ) {
        assert( a.data.limit != null, 'Queries should enforce a data limit' );

        if ( a.data.limit ) {
          assert( a.data.limit <= 100, 'Query limits should not exceed 100' );
        }
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
        assert( view.data.limit != null, 'Queries should enforce a data limit' );

        if ( view.data.limit ) {
          assert( view.data.limit <= 100, 'Query limits should not exceed 100' );
        }
      }
    });
  });
});
