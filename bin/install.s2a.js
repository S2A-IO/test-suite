/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Install s2a packages.
 */
const fs = require( 'fs-extra' );
const path = require( 'path' );

// Important directories.
const assets = path.join( process.env.S2A_PATH, 'app-assets' );
const appschema = path.join( process.env.S2A_PATH, 'app-schema' );
const mobile = path.join( process.env.S2A_PATH, 'dist', 'mobile' );
const desktop = path.join( process.env.S2A_PATH, 'dist', 'desktop' );
const jit = path.join( process.env.S2A_PATH, 'dist', 'jit' );
const loaders = path.join( process.env.S2A_PATH, 'compiler' );
const schema = path.join( process.env.S2A_PATH, 'schema' );

// Important destinations
const assetsPkg = path.join( __dirname, '..', 'node_modules', '@s2a', 'app-assets' );
const appschemaPkg = path.join( __dirname, '..', 'node_modules', '@s2a', 'app-schema' );
const mobilePkg = path.join( __dirname, '..', 'node_modules', '@s2a', 'mobile' );
const desktopPkg = path.join( __dirname, '..', 'node_modules', '@s2a', 'desktop' );
const jitPkg = path.join( __dirname, '..', 'node_modules', 'jit' );
const loadersPkg = path.join( __dirname, '..', 'node_modules', '@s2a', 'compiler' );
const schemaPkg = path.join( __dirname, '..', 'node_modules', '@s2a', 'schema' );

// First ensure the parent directory exists.
fs.ensureDirSync( path.join( __dirname, '..', 'node_modules', '@s2a' ) );

/**
 * Update the given link with new target directory.
 *
 * @param {string} link                   Link to update.
 * @param {string} targetDirectory        Directory the link will point to.
 *
 * @returns {undefined} None.
 */
function updateLink( link, targetDirectory ) {
  // Read the link to get target.
  return fs.readlink( link )
  .then( function OnLinkRead( trgt ) {
    // If the target is different, then update it.
    if ( trgt !== targetDirectory ) {
      return fs.unlink( link )
      .then( function OnUnlink() {
        return fs.symlink( targetDirectory, link, 'dir' );
      });
    }

    // Do nothing as we are already updated.
    return trgt;
  }).catch( function OnLinkDoesNotExist( e ) {

    // If link does not exist, then just create it.
    return fs.symlink( targetDirectory, link, 'dir' );
  });
}

// Link to the packages.
updateLink( assetsPkg, assets );
updateLink( appschemaPkg, appschema );
updateLink( mobilePkg, mobile );
updateLink( desktopPkg, desktop );
updateLink( jitPkg, jit );

// Only the compiler loaders have to be copied.
fs.copy( loaders, loadersPkg );
fs.copy( schema, schemaPkg );

// Give feedback to user.
console.log( '@s2a client packages are installed and ready for use.' );
