/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Checks the correctness of URLs in the app.
 */
import { getBuild } from '../../loader';
import { assert } from 'chai';
import 'mocha';

describe( 'App - URL', () => {
  describe( '# Check section id for each url', () => {
    // Get the build.
    let build: any = getBuild( process.argv, process.cwd() );

    // Go through all the urls.
    let typ: string[] = Object.keys( build.urls );

    // Parent part of the url.
    for ( let i = 0; i < typ.length; i++ ) {
      let t: string = typ[ i ];

      // Sections in the url.
      let sects: string[]  = Object.keys( build.urls[ t ] );

      for ( let j = 0; j < sects.length; j++ ) {
        let s: string = sects[ j ];

        it( 'URL: /' + t + '/' + s, () => {
          // Confirm section id matches section name.
          assert( s === build.urls[ t ][ s ].id, 'Section id (' + build.urls[ t ][ s ].id  +
          ') does not match section name (' + s + ')' );
        });
      }
    }
  });
});
