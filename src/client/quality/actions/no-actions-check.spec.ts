/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Checks that there are empty actions arrays.
 */
import { forAllActions, getBuild } from '../../loader';
import { assert } from 'chai';
import 'mocha';

describe( 'Actions - There should be no empty actions', () => {
  // Get the build.
  const build: any = getBuild( process.argv, process.cwd() );

  // Get all the actions.
  forAllActions( build, ( t: string, s: string, ss: string, i: number,
    actionType: string, actions: any[], errorActions: any ) => {
    it( actionType + ': /' + t + '/' + s + '/' + ss + '[' + i + ']' , () => {
      assert( actions.length > 0, 'No actions given' );

      // If there are error actions.
      if ( errorActions ) {
        const keys: string[] = Object.keys( errorActions );

        assert( keys.length > 0,
          'Error actions object should not be empty. Do not declare it, if not required' );

        // Check for empty error actions unless its the general error action.
        for ( let j = 0; j < keys.length; j++ ) {
          assert( keys[ j ] === 'general' || errorActions[ keys[ j ] ].length > 0,
            'Error actions is empty for key: ' + keys[ j ] );
        }
      }

    });
  });
});
