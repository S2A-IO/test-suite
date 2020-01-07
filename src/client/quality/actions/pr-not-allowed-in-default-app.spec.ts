/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Checks that there are empty actions arrays.
 */
import { forAllActions, getBuild, getAppName } from '../../loader';
import { assert } from 'chai';
import 'mocha';

// This test is only for the default app.
const appName: string = getAppName( process.argv );

if ( appName === 'Default.js' ) {
  describe( 'Actions - There should be no pr action in the default app', () => {
    // Get the build.
    const build: any = getBuild( process.argv, process.cwd() );

    // Ensure pr action is not present in Default.js.
    const checkActions = ( actions: any[] ): void => {
      for ( let j = 0; j < actions.length; j++ ) {
        const a: any = actions[ j ];

        // Ensure pr is not present.
        assert( a.task !== 'pr', 'pr tasks not allowed in the default app' );
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
  });
}
