/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Checks the notify and PR tasks have correct server references.
 */
import { forAllActions, getBuild } from '../../loader';
import { getServerBuild } from '../../../server/loader';
import { assert } from 'chai';
import 'mocha';

describe( 'Actions - pr and notify should have correct server references', () => {
  // Get the build.
  const build: any = getBuild( process.argv, process.cwd() );
  const serverBuild: any = getServerBuild( process.argv, process.cwd() );

  // Given an array of actions, ensure corret usage of pr and notify.
  const checkActions = ( actions: any[] ): void => {
    for ( let j = 0; j < actions.length; j++ ) {
      const a: any = actions[ j ];

      // If there is goBack, then there should be no other actions.
      if ( a.task === 'pr' ) {
        assert( serverBuild.refs[ a.key ] , 'Step ' + j +
          ': Server side does not have referenced key ' + a.key + ' for pr task' );
      } else if ( a.task === 'notifyQueue' ) {
        assert( serverBuild.refs[ a.reference ] , 'Step ' + j +
          ': Server side does not have referenced key ' + a.reference + ' for notifyQueue task' );
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
