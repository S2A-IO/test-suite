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
 * @param {string} viewType     View type to look for (form, report, tabs, null for all).
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
          if ( viewType == null || v.type === viewType ) {
            cb( t, s, ss, l );
          }
        }
      }
    }
  }
};

/**
 * Execute passed function for all sets of actions on all views on the passed build.
 *
 * @param {any} build           Build to work on.
 * @param {(): any} cb          Call back to execute.
 *
 * @returns {undefined} None.
 */
export const forAllActions = ( build: any,
  cb: ( t: string, s: string, ss: string, i: number,
    actionType: string, actions: any[], errorActions: any ) => void ): void => {

  // Handle app-wide notifications.
  // If the view has onNotifications
  if ( build.onNotifications ) {
    // Process all notification events.
    for ( let i = 0; i < build.onNotifications.length; i++ ) {
      let e: string = build.onNotifications[ i ].references[ 0 ];

      cb( 'App', '', '', i, e + '(onNotifications)', build.onNotifications[ i ].actions,
        build.onNotifications[ i ].errorActions );
    }
  }

  // Get all the views for this build
  forAllViews( build, null, ( t: string, s: string, ss: string, idx: number ) => {
    // Get the view.
    let view: any = build.urls[ t ][ s ].sections[ ss ][ idx ];

    // Markdowns are found at many places, we use this code to get actions
    // registered on the markdown.
    const forAllMarkdownActions = ( md: any, description: string ): void => {
      if ( md.events ) {
        let mEvents: string[] = Object.keys( md.events );

        // All event actions.
        for ( let j = 0; j < mEvents.length; j++ ) {
          let e: any = mEvents[ j ];
          cb( t, s, ss, idx, e + description, md.events[ e ].actions,
            md.events[ e ].errorActions );
        }
      }
    }

    // If the view has an onData
    if ( view.onData ) {
      cb( t, s, ss, idx, 'onData', view.onData.actions, view.onData.errorActions );
    }

    // If the view has onNotifications
    if ( view.onNotifications ) {
      // Process all notification events.
      for ( let i = 0; i < view.onNotifications.length; i++ ) {
        let e: string = view.onNotifications[ i ].references[ 0 ];
        cb( t, s, ss, idx, e + '(onNotifications)', view.onNotifications[ i ].actions,
          view.onNotifications[ i ].errorActions );
      }
    }

    // If the view is a form...
    if ( view.type === 'form' ) {
      // Go through all the fields it has.
      for ( let i = 0; i < view.fields.length; i++ ) {
        let f: any = view.fields[ i ];

        // There are some field types which have actions.
        switch( f.type ) {
          case 'buttons':
            // All button actions.
            for ( let j = 0; j < f.buttons.length; j++ ) {
              let b: any = f.buttons[ j ];
              cb( t, s, ss, idx, b.text + ' (Button[' + i + '][' + j + '])',
                b.actions, b.errorActions );
            }
            break;

          case 'markdown':
            // If this markdown has events.
            forAllMarkdownActions( f, '(form markdown)' );
            break;

          case 'tags':
            // If the tags have on change actions.
            if ( f.onChange != null ) {
              // Tag on change actions.
              cb( t, s, ss, idx, 'Tags[' + i + '] onChange',
                  f.onChange.actions, f.onChange.errorActions );
            }

            break;

          case 'textarea':
            // If this is a rich text area with buttons.
            if ( f.editor != null && f.editor.buttons != null ) {
              // All button actions.
              for ( let j = 0; j < f.editor.buttons.length; j++ ) {
                let b: any = f.editor.buttons[ j ];
                cb( t, s, ss, idx, b.text + ' (Editor Button[' + i + '][' + j + '])',
                  b.actions, b.errorActions );
              }
            }

            break;
        }
      }
    }

    // If the view is a report...
    if ( view.type === 'report' ) {
      // Go through all the dahletss it has.
      for ( let i = 0; i < view.dashlets.length; i++ ) {
        let d: any = view.dashlets[ i ];

        // There are some dashlets types which have actions.
        switch( d.type ) {
          case 'drop-list':
            // If the lists have events.
            for ( let j = 0; j < d.lists.length; j++ ) {
              let l: any = d.lists[ j ];

              // If the drop list has onData.
              if ( l.onData ) {
                cb( t, s, ss, idx, 'onData (drop list)', l.onData.actions,
                  l.onData.errorActions );
              }

              // If the drop list has onDrop.
              if ( l.onDrop ) {
                cb( t, s, ss, idx, 'onDrop (drop list)', l.onDrop.actions,
                  l.onDrop.errorActions );
              }
            }
            break;

          case 'markdown':
            // If this markdown has events.
            forAllMarkdownActions( d, '(report markdown)' );
            break;

          case 'table':
            // If the table has a drilldown.
            if ( d.drilldown != null ) {
              // drilldown actions
              cb( t, s, ss, idx, 'Table[' + i + '] drilldown',
                  d.drilldown.actions, d.drilldown.errorActions );
            }

            // If the table has markdown.
            if ( d.markdown != null ) {
              forAllMarkdownActions( d.markdown, '(table markdown)' );
            }

            // If the table has headers with markdown.
            if ( d.header != null ) {
              for ( let j = 0; j < d.header.length; j++ ) {
                let h: any[] = d.header[ j ];
                for ( let k = 0; k < h.length; k++ ) {
                  let e: any = h[ k ];

                  // If this header column has markdown.
                  if ( e.markdown ) {
                    forAllMarkdownActions( e.markdown, '(table header markdown)' );
                  }
                }
              }
            }

            // If the table has values with markdown.
            if ( d.values != null ) {
              for ( let j = 0; j < d.values.length; j++ ) {
                let v: any = d.values[ j ];

                // If this value has markdown.
                if ( v.markdown ) {
                  forAllMarkdownActions( v.markdown, '(table value markdown)' );
                }
              }
            }

            // If the table has footer with markdown.
            if ( d.footer != null ) {
              for ( let j = 0; j < d.footer.length; j++ ) {
                let f: any = d.footer[ j ];

                // If this footer has markdown.
                if ( f.markdown ) {
                  forAllMarkdownActions( f.markdown, '(table footer markdown)' );
                }
              }
            }
            break;

          case 'virtual-scroll':
            // If this virtual scroll has events.
            forAllMarkdownActions( d, '(report virtual scroll)' );

            // If this virtual scroll has onData
            if ( d.onData ) {
              cb( t, s, ss, idx, 'onData (virtual scroll)', d.onData.actions,
                d.onData.errorActions );
            }

            // If this virtual scroll has onScrollTop
            if ( d.onScrollTop ) {
              cb( t, s, ss, idx, 'onScrollTop (virtual scroll)', d.onScrollTop.actions,
                d.onScrollTop.errorActions );
            }

            // If this virtual scroll has onScrollBottom
            if ( d.onScrollBottom ) {
              cb( t, s, ss, idx, 'onScrollBottom (virtual scroll)', d.onScrollBottom.actions,
                d.onScrollBottom.errorActions );
            }

            break;
        }
      }
    }

    // If the view is a tab...
    if ( view.type === 'tabs' ) {
      // Go through all the tabs and handle markdown actions in them.
      for ( let i = 0; i < view.tabs.length; i++ ) {
        let t: any = view.tabs[ i ].tab;
        forAllMarkdownActions( t, '(tab markdown)' );
      }
    }
  });
};
