/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Queries should have correct filter references.
 */
import { forAllActions, forAllViews, getBuild } from '../../loader';
import { assert } from 'chai';
import 'mocha';

describe( 'Queries - Should have filter references when filters are used', () => {
  // Get the build.
  let build: any = getBuild( process.argv, process.cwd() );

  const checkFilters = ( query: any, idx?: number ): void => {
    let prefix: string = idx ? 'Step ' + idx + ': ' : '';
    let keys: string[] = Object.keys( query.filters );

    // If there are filters, ensure there are filter reference fields.
    if ( keys.length > 0 ) {
      assert( query.referenceFields.length > 0, prefix +
        'Queries with filters should have reference fields' );

      // Ensure the reference fields exist in the filter.
      for ( let k = 0; k < query.referenceFields.length; k++ ) {
        let f: string = query.referenceFields[ k ];
        assert( query.filters[ f ] != null, prefix +
          'Filter reference key ' + f + ' does not exist' );
      }
    }
  }

  // Given an array of actions, ensure there are limits on loadData
  const checkActions = ( actions: any[] ): void => {
    for ( let j = 0; j < actions.length; j++ ) {
      let a: any = actions[ j ];

      // If we have a loadData ensure it has a limit
      if ( a.task === 'loadData' ) {
        checkFilters( a.data, j );
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
        checkFilters( view.data );
      }
    });
  });
});
