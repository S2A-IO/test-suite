/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Different queries should not have the same reference.
 */
import { forAllActions, forAllViews, getBuild } from '../../loader';
import { checkQueryReferenceKey } from '../../../common/QueryChecker';
import 'mocha';

describe( 'Queries - Different queries should not use same reference key', () => {
  // Get the build.
  const build: any = getBuild( process.argv, process.cwd() );
  const referenceKeyMap: Map<string, any> = new Map<string, any>();

  // Given an array of actions, find loadData queries.
  const checkActions = ( actions: any[], summary: string ): void => {
    for ( let j = 0; j < actions.length; j++ ) {
      const a: any = actions[ j ];

      // If we have a loadData, execute checks on it.
      if ( a.task === 'loadData' ) {
        checkQueryReferenceKey( a.data, summary, referenceKeyMap, j );
      }
    }
  };

  // Get all the actions.
  forAllActions( build, ( t: string, s: string, ss: string, i: number,
    actionType: string, actions: any[], errorActions: any ) => {

    it( actionType + ': /' + t + '/' + s + '/' + ss + '[' + i + ']' , () => {
      checkActions( actions, actionType + ': /' + t + '/' + s + '/' + ss + '[' + i + ']' );

      if ( errorActions ) {
        const keys: string[] = Object.keys( errorActions );
        for ( let j = 0; j < keys.length; j++ ) {
          checkActions( errorActions[ keys[ j ] ], actionType + ' (onError): /' + t + '/' + s + '/' + ss + '[' + i + ']' );
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
        checkQueryReferenceKey( view.data, 'Data: /' + t + '/' + s + '/' + ss + '[' + i + ']',
          referenceKeyMap );
      }
    });
  });
});
