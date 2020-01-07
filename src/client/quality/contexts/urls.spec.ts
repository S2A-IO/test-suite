/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Checks the correct usage of prefix.
 */
import { getBuild } from '../../loader';
import { assert } from 'chai';
import 'mocha';

/**
 * Check if given url is part of the app.
 *
 * @param {any} urls                  URLs in the app.
 * @param {string} url                URL to check, if it exists.
 *
 * @returns {boolean} exists          True if it exists, false otherwise.
 */
function doesUrlExist( urls: any, url: string ): boolean {
  const parts: string[] = url.split( '/' );
  let exists = true;

  // Ensure the lenght of url parts is correct.
  if ( parts.length !== 4 ) exists = false;

  // Check if the url does not exist
  if ( urls[ parts[ 1 ] ] == null || urls[ parts[ 1 ] ][ parts[ 2 ] ] == null ||
    urls[ parts[ 1 ] ][ parts[ 2 ] ].sections[ parts[ 3 ] ] == null )
    exists = false;

  return exists;
}

describe( 'Contexts - URL', () => {
  const build: any = getBuild( process.argv, process.cwd() );

  describe( '# Check if URLs referenced in context exist', () => {
    const ctxt: any[] = build.context;

    // Check all contexts.
    for ( let i = 0; i < ctxt.length; i++ ) {
      const c: any = ctxt[ i ];

      // Check each prefix.
      it( 'Prefix: ' + c.prefix, () => {
        // If the fallback url is specified, check if it exists.
        if ( c.fallback ) assert( doesUrlExist( build.urls, c.fallback ),
          'Fallback url: ' + c.fallback + ' does not exist.' );

        // If the nav url is specified, check if it exists.
        if ( c.nav ) assert( doesUrlExist( build.urls, c.nav ),
          'Nav url: ' + c.nav + ' does not exist.' );

        // If the rightSide url is specified, check if it exists.
        if ( c.rightSide ) assert( doesUrlExist( build.urls, c.rightSide ),
          'Right side url: ' + c.rightSide + ' does not exist.' );

        // If the leftSide url is specified, check if it exists.
        if ( c.leftSide ) assert( doesUrlExist( build.urls, c.leftSide ),
          'Left side url: ' + c.leftSide + ' does not exist.' );

        // If the context has an onLoad with a url specified (while actions execute),
        // check if it exists.
        if ( c.onLoad && c.onLoad.url ) assert( doesUrlExist( build.urls, c.onLoad.url ),
          'onLoad.url: ' + c.onLoad.url + ' does not exist.' );
      });
    }
  });
});
