/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Loader for the build.
 */
const path = require( 'path' );
const minimist = require( 'minimist' );

/**
 * Build loader.
 *
 * @param {any[]} argv          Arguments received.
 * @param {string} cwd          Current working directory.
 *
 * @returns {any} build         Instance of the build.
 */
export const getBuild = ( argv: any[], cwd: string ): any => {
  const params = minimist( argv.slice( 2 ) );
  const p = path.isAbsolute( params.src ) ?
    path.join( params.src, 'builds', params.app ) :
    path.join( cwd, params.src, 'builds', params.app );

  const AppBuild = require( p );
  return new AppBuild();
};

/**
 * Get the source root for the app.
 *
 * @param {any[]} argv          Arguments received.
 * @param {string} cwd          Current working directory.
 *
 * @returns {any} build         Instance of the build.
 */
export const getSrcRoot = ( argv: any[], cwd: string ): string => {
  const params = minimist( argv.slice( 2 ) );
  const p = path.isAbsolute( params.src ) ?
    params.src : path.join( cwd, params.src );

  return p;
};

/**
 * Get the name of the app.
 *
 * @param {any[]} argv          Arguments received.
 *
 * @returns {string} app        Name of the app.
 */
export const getAppName = ( argv: any[] ): string => {
  const params = minimist( argv.slice( 2 ) );
  return params.app;
};
