/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Similar queries should not have the different references for improved
 * caching.
 */
import { forAllActions, forAllViews, getBuild } from '../../loader';
import { checkSimilarQueries } from '../../../common/QueryChecker';
import 'mocha';

describe( 'Queries - Similar queries should not use different reference keys', () => {
  // Get the build.
  const build: any = getBuild( process.argv, process.cwd() );
  const queryMap: Map<string, any> = new Map<string, any>();

  // Given an array of actions, find loadData queries.
  const checkActions = ( actions: any[], summary: string ): void => {
    for ( let j = 0; j < actions.length; j++ ) {
      const a: any = actions[ j ];

      // If we have a loadData, execute checks on it.
      if ( a.task === 'loadData' ) {
        checkSimilarQueries( a.data, summary, queryMap, j );
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
        checkSimilarQueries( view.data, 'Data: /' + t + '/' + s + '/' + ss + '[' + i + ']', queryMap );
      }
    });
  });
});
