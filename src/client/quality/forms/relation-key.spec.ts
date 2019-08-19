/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Checks the correct usage of relation keys.
 */
import { forAllViews, getBuild } from '../../loader';
import { assert } from 'chai';
import 'mocha';

describe( 'Forms - Relation Keys', () => {
  // Get the build.
  let build: any = getBuild( process.argv, process.cwd() );

  forAllViews( build, 'form', ( t: string, s: string, ss: string, i: number ) => {
    it( 'Form: /' + t + '/' + s + '/' + ss + '[' + i + ']' , () => {
      let views: any[] = build.urls[ t ][ s ].sections[ ss ];
      let relationKey: string = views[ i ].relationKey;

      // If we have a relation key ensure there are other views in the same section
      if ( relationKey ) {
        let found: boolean = false;

        // We are looking for other views in the same section that have the same
        // relationKey set.
        for ( let j = 0; j < views.length; j++ ) {
          if ( i !== j && views[ j ].relationKey === relationKey ) found = true;
        }

        assert( found, 'Relation key (' + relationKey +
          ') for form does not exist on any other peer form' );
      }
    });
  });
});
