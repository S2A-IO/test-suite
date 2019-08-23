/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Perform no network operations before a redirect.
 */
import { forAllActions, getBuild } from '../../loader';
import { assert } from 'chai';
import 'mocha';

describe( 'Navigation Performance - No network operation before a redirect', () => {
  // Get the build.
  let build: any = getBuild( process.argv, process.cwd() );

  // Given an array of actions, ensure there are no networking operations before
  // a redirect
  const checkActions = ( actions: any[] ): void => {
    let networkOps: string[] = [];

    for ( let j = 0; j < actions.length; j++ ) {
      let a: any = actions[ j ];

      // If we have a network operation.
      if ( a.task === 'pullpush' || a.task === 'push' || a.task === 'notify' ||
        a.task === 'pr' ) {
        networkOps.push( a.task + '@' + j );
      }

      // If we have a loadData task with localOnly false meaning a network operation
      // happens
      else if ( a.task === 'loadData' && a.data.localOnly !== true ) {
        networkOps.push( a.task + '@' + j );
      }

      // If we have a redirect.
      else if ( a.task === 'redirect' || a.task === 'goBack' ) {
        assert( networkOps.length === 0, 'Netowrk ops: ' +
          JSON.stringify( networkOps ) + ' appears before ' + a.task + '@' + j );
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
});
