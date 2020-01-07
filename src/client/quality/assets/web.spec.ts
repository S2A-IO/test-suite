/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Checks the web assets.
 */
const path = require( 'path' );
const fs = require( 'fs-extra' );

import { getBuild, getBuildRoot } from '../../loader';
import { assert } from 'chai';
import 'mocha';

/**
 * Check if given asset is part of the app.
 *
 * @param {string} buildRoot          Path to the root of the build folder.
 * @param {string} p                  Relative path to the asset from root.
 *
 * @returns {boolean} exists          True if it exists, false otherwise.
 */
function doesAssetExist( buildRoot: string, p: string ): Promise<boolean> {
  const assetPath: string = path.join( buildRoot, p );
  return fs.pathExists( assetPath );
}

describe( 'Assets - Web', () => {
  const build: any = getBuild( process.argv, process.cwd() );
  const buildRoot: string = getBuildRoot( process.argv, process.cwd() );

  /** Test 1 **/
  describe( '# Ensure all referenced web assets exist', () => {
    const assets: any = build.assets;
    const p: string[] = assets.web ? assets.web.css.concat( assets.web.js ) : [];

    // Check all paths.
    for ( let i = 0; i < p.length; i++ ) {
      // Check each file.
      it( 'Asset: ' + p[ i ], () => {
        // If the specified asset is not in the source folder.
        return doesAssetExist( buildRoot, p[ i ] ).then( ( result ) => {
          assert( result, 'This asset does not exist in the source folder.' );
          return result;
        });
      });
    }
  });
});
