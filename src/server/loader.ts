/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Loader for the build.
 */
const path = require( 'path' );
const minimist = require( 'minimist' );

/**
 * Build loader for server.
 *
 * @param {any[]} argv          Arguments received.
 * @param {string} cwd          Current working directory.
 *
 * @returns {any} build         Instance of the build.
 */
export const getServerBuild = ( argv: any[], cwd: string ): any => {
  const params = minimist( argv.slice( 2 ) );
  const p = path.isAbsolute( params.src ) ?
    path.join( params.src, 'process', params.app ) :
    path.join( cwd, params.src, 'process', params.app );

  const ServerBuild = require( p );
  return new ServerBuild();
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
 * Get the name of the server app.
 *
 * @param {any[]} argv          Arguments received.
 *
 * @returns {string} app        Name of the app.
 */
export const getServerName = ( argv: any[] ): string => {
  const params = minimist( argv.slice( 2 ) );
  return params.app;
};
