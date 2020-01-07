/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Checks the correct usage of relation keys.
 */
import { forAllActions, getBuild } from '../../loader';
import { assert } from 'chai';
import 'mocha';

describe( 'Actions - goBack should not have other tasks', () => {
  // Get the build.
  const build: any = getBuild( process.argv, process.cwd() );

  // Given an array of actions, ensure that if there is goBack, then there are
  // no other actions.
  const checkActions = ( actions: any[] ): void => {
    for ( let j = 0; j < actions.length; j++ ) {
      const a: any = actions[ j ];

      // If there is goBack, then there should be no other actions.
      if ( a.task === 'goBack' ) {
        assert( actions.length === 1, 'Actions with goBack should not have other tasks' );
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
});
