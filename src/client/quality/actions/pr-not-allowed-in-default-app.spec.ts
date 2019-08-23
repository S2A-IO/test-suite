/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Checks that there are empty actions arrays.
 */
import { forAllActions, getBuild, getAppName } from '../../loader';
import { assert } from 'chai';
import 'mocha';

// This test is only for the default app.
let appName: string = getAppName( process.argv );

if ( appName === 'Default.js' ) {
  describe( 'Actions - There should be no pr action in the default app', () => {
    // Get the build.
    let build: any = getBuild( process.argv, process.cwd() );

    // Given an array of actions, ensure that if there is goBack, then there are
    // no other actions.
    const checkActions = ( actions: any[] ): void => {
      let networkOps: string[] = [];

      for ( let j = 0; j < actions.length; j++ ) {
        let a: any = actions[ j ];

        // If there is goBack, then there should be no other actions.
        assert( a.task !== 'pr', 'pr tasks not allowed in the default app' );
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
  });
}
