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

  const checkLimit = ( query: any, idx?: number ): void => {
    let prefix: string = idx ? 'Step ' + idx + ': ' : '';

    assert( query.limit != null, prefix + 'Queries should enforce a data limit' );

    if ( query.limit ) {
      assert( query.limit <= 100, prefix + 'Query limits should not exceed 100' );
    }
  }

  // Given an array of actions, ensure there are limits on loadData
  const checkActions = ( actions: any[] ): void => {
    for ( let j = 0; j < actions.length; j++ ) {
      let a: any = actions[ j ];

      // If we have a loadData ensure it has a limit
      if ( a.task === 'loadData' ) {
        checkLimit( a.data, j );
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
        checkLimit( view.data );
      }
    });
  });
});
