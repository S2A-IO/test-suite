/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Queries should have a refresh time of 5 minutes.
 */
import { forAllActions, forAllViews, getBuild } from '../../loader';
import { checkQueryRemoteLocalFlags } from '../../../common/QueryChecker';
import 'mocha';

describe( 'Queries Performance - Queries should not set both remoteOnly and localOnly', () => {
  // Get the build.
  const build: any = getBuild( process.argv, process.cwd() );

  // Given an array of actions, ensure there are limits on loadData
  const checkActions = ( actions: any[] ): void => {
    for ( let j = 0; j < actions.length; j++ ) {
      const a: any = actions[ j ];

      // If we have a loadData ensure it has a limit
      if ( a.task === 'loadData' ) {
        checkQueryRemoteLocalFlags( a.data, j );
      }
    }
  };

  // Get all the actions.
  forAllActions( build, ( t: string, s: string, ss: string, i: number,
    actionType: string, actions: any[], errorActions: any ) => {

    it( actionType + ': /' + t + '/' + s + '/' + ss + '[' + i + ']' , () => {
      checkActions( actions );

      if ( errorActions ) {
        const keys: string[] = Object.keys( errorActions );
        for ( let j = 0; j < keys.length; j++ ) {
          checkActions( errorActions[ keys[ j ] ] );
        }
      }
    });
  });

  // Get all the data constructs for views.
  forAllViews( build, null, ( t: string, s: string, ss: string, i: number ) => {
    it( 'Data: /' + t + '/' + s + '/' + ss + '[' + i + ']' , () => {
      const view: any = build.urls[ t ][ s ].sections[ ss ][ i ];

      // If the view has a data construct.
      if ( view.data ) {
        checkQueryRemoteLocalFlags( view.data );
      }
    });
  });
});
