/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Checks the mobile assets.
 */
const path = require( 'path' );
const fs = require( 'fs-extra' );

import { getAppName, getBuild, getSrcRoot } from '../../loader';
import { assert } from 'chai';
import 'mocha';

/**
 * Check if given asset is part of the app.
 *
 * @param {string} srcRoot            Path to the root of the app.
 * @param {string} p                  Relative path to the asset from root.
 *
 * @returns {boolean} exists          True if it exists, false otherwise.
 */
function doesAssetExist( srcRoot: string, p: string ): Promise<boolean> {
  let assetPath: string = p.startsWith( 'builds' ) ?
    path.join( srcRoot, p ) : path.join( srcRoot, 'builds', p );
  return fs.pathExists( assetPath );
}

describe( 'Assets - Mobile', () => {
  let build: any = getBuild( process.argv, process.cwd() );
  let srcRoot: string = getSrcRoot( process.argv, process.cwd() );

  /** Test 1 **/
  describe( '# Ensure all referenced mobile assets exist', () => {
    let assets : any = build.assets;
    let p: string[] = assets.mobile ? assets.mobile.css.concat( assets.mobile.js ) : [];

    // Check all paths.
    for ( let i = 0; i < p.length; i++ ) {
      // Check each file.
      it( 'Asset: ' + p[ i ], () => {
        // If the specified asset is not in the source folder.
        return doesAssetExist( srcRoot, p[ i ] ).then( ( result ) => {
          assert( result, 'This asset does not exist in the source folder.' );
          return result;
        });
      });
    }
  });
});
