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

/**
 * Execute passed function on all views of given type on the passed build.
 *
 * @param {any} build           Build to work on.
 * @param {string} viewType     View type to look for (form, report, tabs).
 * @param {(): any} cb          Call back to execute.
 *
 * @returns {undefined} None.
 */
export const forAllViews = ( build: any, viewType: string,
  cb: ( t: string, s: string, ss: string, i: number ) => void ): void => {
  // Go through all the urls.
  let typ: string[] = Object.keys( build.urls );

  // Parent part of the url.
  for ( let i = 0; i < typ.length; i++ ) {
    let t: string = typ[ i ];

    // Sections in the url.
    let sects: string[]  = Object.keys( build.urls[ t ] );

    // Go through all the sections.
    for ( let j = 0; j < sects.length; j++ ) {
      let s: string = sects[ j ];

      // Go through all the sub sections.
      let subs: string[] = Object.keys( build.urls[ t ][ s ].sections );
      for ( let k = 0; k < subs.length; k++ ) {
        let ss: string = subs[ k ];
        let views: any[] = build.urls[ t ][ s ].sections[ ss ];

        // Now go through all the views.
        for ( let l = 0; l < views.length; l++ ) {
          let v: any = views[ l ];

          // If this view is a type of viewType.
          if ( v.type === viewType ) {
            cb( t, s, ss, l );
          }
        }
      }
    }
  }
};
