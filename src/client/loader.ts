/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Loader for the build.
 */
const path = require( 'path' );
const minimist = require( 'minimist' );

declare const __non_webpack_require__: any;

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
  const p = path.isAbsolute( params.app ) ? params.app : path.join( cwd, params.app );

  const AppBuild = __non_webpack_require__( p );
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
  const typ: string[] = Object.keys( build.urls );

  // Go through all subsections and process them.
  const forAllSubs = ( t: string, s: string, subs: string[] ): void => {
    for ( let k = 0; k < subs.length; k++ ) {
      const ss: string = subs[ k ];
      const views: any[] = build.urls[ t ][ s ].sections[ ss ];

      // Now go through all the views.
      for ( let l = 0; l < views.length; l++ ) {
        const v: any = views[ l ];

        // If this view is a type of viewType.
        if ( viewType == null || v.type === viewType ) {
          cb( t, s, ss, l );
        }
      }
    }
  };

  // Parent part of the url.
  for ( let i = 0; i < typ.length; i++ ) {
    const t: string = typ[ i ];

    // Sections in the url.
    const sects: string[]  = Object.keys( build.urls[ t ] );

    // Go through all the sections.
    for ( let j = 0; j < sects.length; j++ ) {
      const s: string = sects[ j ];

      // Go through all the sub sections.
      forAllSubs( t, s, Object.keys( build.urls[ t ][ s ].sections ) );
    }
  }
};

/**
 * Markdowns are found at many places, we use this code to get actions
 * registered on the markdown.
 *
 * @param {string} t            Type from url.
 * @param {string} s            Section from url.
 * @param {string} ss           Sub-section from url.
 * @param {number} idx          Index
 * @param {any} md              Markdown information.
 * @param {string} description  Description on markdown.
 * @param {(): any} cb          Call back to execute.
 *
 * @returns {undefined} None.
 */
const forAllMarkdownActions = (
  t: string, s: string, ss: string, idx: number, md: any, description: string,
  cb: ( t: string, s: string, ss: string, i: number,
    actionType: string, actions: any[], errorActions: any ) => void
): void => {
  if ( md.events ) {
    const mEvents: string[] = Object.keys( md.events );

    // All event actions.
    for ( let j = 0; j < mEvents.length; j++ ) {
      const e: any = mEvents[ j ];
      cb( t, s, ss, idx, e + description, md.events[ e ].actions,
        md.events[ e ].errorActions );
    }
  }
};

/**
 * Handle notifications in the app.
 *
 * @param {string} t            Type from url.
 * @param {string} s            Section from url.
 * @param {string} ss           Sub-section from url.
 * @param {number} idx          Index
 * @param {any} notifications   Notification information.
 * @param {(): any} cb          Call back to execute.
 *
 * @returns {undefined} None.
 */
const forAllNotifications = (
  t: string, s: string, ss: string, idx: number, notifications: any,
  cb: ( t: string, s: string, ss: string, i: number,
    actionType: string, actions: any[], errorActions: any ) => void
): void => {
  // Process all notification events.
  for ( let i = 0; i < notifications.length; i++ ) {
    const e: string = notifications[ i ].references[ 0 ];

    cb( t, s, ss, idx !== null ? idx : i, e + '(onNotifications)',
      notifications[ i ].actions, notifications[ i ].errorActions );
  }
};

/**
 * Handle button actions.
 *
 * @param {string} t            Type from url.
 * @param {string} s            Section from url.
 * @param {string} ss           Sub-section from url.
 * @param {number} idx          Index.
 * @param {number} i            Fields index.
 * @param {any[]} buttons       Buttons information.
 * @param {(): any} cb          Call back to execute.
 *
 * @returns {undefined} None.
 */
const forAllButtonActions = (
  t: string, s: string, ss: string, idx: number, i: number, buttons: any[],
  cb: ( t: string, s: string, ss: string, i: number,
    actionType: string, actions: any[], errorActions: any ) => void
): void => {
  if ( buttons != null ) {
    for ( let j = 0; j < buttons.length; j++ ) {
      const b: any = buttons[ j ];
      cb( t, s, ss, idx, b.text + ' (Button[' + i + '][' + j + '])',
        b.actions, b.errorActions );
    }
  }
};

/**
 * Handle droplist actions.
 *
 * @param {string} t            Type from url.
 * @param {string} s            Section from url.
 * @param {string} ss           Sub-section from url.
 * @param {number} idx          Index.
 * @param {number} i            Dashlet index.
 * @param {any} d               Droplist information.
 * @param {(): any} cb          Call back to execute.
 *
 * @returns {undefined} None.
 */
const processDroplistActions = (
  t: string, s: string, ss: string, idx: number, i: number, d: any,
  cb: ( t: string, s: string, ss: string, i: number,
    actionType: string, actions: any[], errorActions: any ) => void
): void => {
  // If the lists have events.
  for ( let j = 0; j < d.lists.length; j++ ) {
    const l: any = d.lists[ j ];

    // If the drop list has onData.
    if ( l.onData ) {
      cb( t, s, ss, idx, `onData (drop list ${i})`, l.onData.actions,
        l.onData.errorActions );
    }

    // If the drop list has onDrop.
    if ( l.onDrop ) {
      cb( t, s, ss, idx, `onData (drop list ${i})`, l.onDrop.actions,
        l.onDrop.errorActions );
    }
  }
};

/**
 * Handle table markdown.
 *
 * @param {string} t            Type from url.
 * @param {string} s            Section from url.
 * @param {string} ss           Sub-section from url.
 * @param {number} idx          Index.
 * @param {any} row             Table dashlet row information.
 * @param {string} desc         Description.
 * @param {(): any} cb          Call back to execute.
 *
 * @returns {undefined} None.
 */
const processTableMarkdown = (
  t: string, s: string, ss: string, idx: number, row: any, desc: string,
  cb: ( t: string, s: string, ss: string, i: number,
    actionType: string, actions: any[], errorActions: any ) => void
): void => {
  for ( let j = 0; j < row.length; j++ ) {
    const v: any[] | any = row[ j ];

    // If the value is an array. we need to process each value in the array.
    if ( Array.isArray( v ) ) {
      for ( let k = 0; k < v.length; k++ ) {
        const e: any = v[ k ];

        // If column has markdown.
        if ( e.markdown ) {
          forAllMarkdownActions( t, s, ss, idx, e.markdown, desc, cb );
        }
      }
    } else if ( v.markdown ) {
      forAllMarkdownActions( t, s, ss, idx, v.markdown, desc, cb );
    }
  }
};

/**
 * Handle table actions.
 *
 * @param {string} t            Type from url.
 * @param {string} s            Section from url.
 * @param {string} ss           Sub-section from url.
 * @param {number} idx          Index.
 * @param {number} i            Dashlet index.
 * @param {any} d               Table dashlet information.
 * @param {(): any} cb          Call back to execute.
 *
 * @returns {undefined} None.
 */
const processTableActions = (
  t: string, s: string, ss: string, idx: number, i: number, d: any,
  cb: ( t: string, s: string, ss: string, i: number,
    actionType: string, actions: any[], errorActions: any ) => void
): void => {
  // If the table has a drilldown.
  if ( d.drilldown != null ) {
    // drilldown actions
    cb( t, s, ss, idx, 'Table[' + i + '] drilldown',
        d.drilldown.actions, d.drilldown.errorActions );
  }

  // If the table has markdown.
  if ( d.markdown != null ) {
    forAllMarkdownActions( t, s, ss, idx, d.markdown, '(table markdown)', cb );
  }

  // If the table has headers with markdown.
  if ( d.header != null ) {
    processTableMarkdown( t, s, ss, idx, d.header, '(table header markdown)', cb );
  }

  // If the table has values with markdown.
  if ( d.values != null ) {
    processTableMarkdown( t, s, ss, idx, d.values, '(table value markdown)', cb );
  }

  // If the table has footer with markdown.
  if ( d.footer != null ) {
    processTableMarkdown( t, s, ss, idx, d.footer, '(table footer markdown)', cb );
  }
};

/**
 * Handle virtual scroll actions.
 *
 * @param {string} t            Type from url.
 * @param {string} s            Section from url.
 * @param {string} ss           Sub-section from url.
 * @param {number} idx          Index.
 * @param {number} i            Dashlet index.
 * @param {any} d               Virtual scroll information.
 * @param {(): any} cb          Call back to execute.
 *
 * @returns {undefined} None.
 */
const processVirtualScrollActions = (
  t: string, s: string, ss: string, idx: number, i: number, d: any,
  cb: ( t: string, s: string, ss: string, i: number,
    actionType: string, actions: any[], errorActions: any ) => void
): void => {
  // If this virtual scroll has events.
  forAllMarkdownActions( t, s, ss, idx, d, '(report virtual scroll)', cb );

  // If this virtual scroll has onData
  if ( d.onData ) {
    cb( t, s, ss, idx, `onData (virtual scroll ${i})`, d.onData.actions,
      d.onData.errorActions );
  }

  // If this virtual scroll has onScrollTop
  if ( d.onScrollTop ) {
    cb( t, s, ss, idx, `onScrollTop (virtual scroll ${i})`, d.onScrollTop.actions,
      d.onScrollTop.errorActions );
  }

  // If this virtual scroll has onScrollBottom
  if ( d.onScrollBottom ) {
    cb( t, s, ss, idx, `onScrollBottom (virtual scroll ${i})`, d.onScrollBottom.actions,
      d.onScrollBottom.errorActions );
  }
};

/**
 * Handle form fields
 *
 * @param {string} t            Type from url.
 * @param {string} s            Section from url.
 * @param {string} ss           Sub-section from url.
 * @param {number} idx          Index.
 * @param {number} i            Fields index.
 * @param {any} f               Field information.
 * @param {(): any} cb          Call back to execute.
 *
 * @returns {undefined} None.
 */
const processField = (
  t: string, s: string, ss: string, idx: number, i: number, f: any,
  cb: ( t: string, s: string, ss: string, i: number,
    actionType: string, actions: any[], errorActions: any ) => void
): void => {
  // There are some field types which have actions.
  switch( f.type ) {
    case 'buttons':
      // All button actions.
      forAllButtonActions( t, s, ss, idx, i, f.buttons, cb );
      break;

    case 'markdown':
      // If this markdown has events.
      forAllMarkdownActions( t, s, ss, idx, f, '(form markdown)', cb );
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
      if ( f.editor != null ) {
        // All button actions.
        forAllButtonActions( t, s, ss, idx, i, f.editor.buttons, cb );
      }

      break;
  }
};

/**
 * Handle view dashlets
 *
 * @param {string} t            Type from url.
 * @param {string} s            Section from url.
 * @param {string} ss           Sub-section from url.
 * @param {number} idx          Index.
 * @param {number} i            Dashlet index.
 * @param {any} d               Dashlet information.
 * @param {(): any} cb          Call back to execute.
 *
 * @returns {undefined} None.
 */
const processDashlet = (
  t: string, s: string, ss: string, idx: number, i: number, d: any,
  cb: ( t: string, s: string, ss: string, i: number,
    actionType: string, actions: any[], errorActions: any ) => void
): void => {
  // There are some dashlets types which have actions.
  switch( d.type ) {
    case 'drop-list':
      processDroplistActions( t, s, ss, idx, i, d, cb );
      break;

    case 'markdown':
      // If this markdown has events.
      forAllMarkdownActions( t, s, ss, idx, d, '(report markdown)', cb );
      break;

    case 'table':
      processTableActions( t, s, ss, idx, i, d, cb );
      break;

    case 'virtual-scroll':
      processVirtualScrollActions( t, s, ss, idx, i, d, cb );
      break;
  }
};

/**
 * Handle forms.
 *
 * @param {string} t            Type from url.
 * @param {string} s            Section from url.
 * @param {string} ss           Sub-section from url.
 * @param {number} idx          Index
 * @param {any} view            Form information.
 * @param {(): any} cb          Call back to execute.
 *
 * @returns {undefined} None.
 */
const processForm = (
  t: string, s: string, ss: string, idx: number, view: any,
  cb: ( t: string, s: string, ss: string, i: number,
    actionType: string, actions: any[], errorActions: any ) => void
): void => {
  // Go through all the fields it has.
  for ( let i = 0; i < view.fields.length; i++ ) {
    const f: any = view.fields[ i ];
    processField( t, s, ss, idx, i, f, cb );
  }
};

/**
 * Handle views.
 *
 * @param {string} t            Type from url.
 * @param {string} s            Section from url.
 * @param {string} ss           Sub-section from url.
 * @param {number} idx          Index
 * @param {any} view            Form information.
 * @param {(): any} cb          Call back to execute.
 *
 * @returns {undefined} None.
 */
const processView = (
  t: string, s: string, ss: string, idx: number, view: any,
  cb: ( t: string, s: string, ss: string, i: number,
    actionType: string, actions: any[], errorActions: any ) => void
): void => {
  // Go through all the dahletss it has.
  for ( let i = 0; i < view.dashlets.length; i++ ) {
    const d: any = view.dashlets[ i ];
    processDashlet( t, s, ss, idx, i, d, cb );
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
    forAllNotifications( 'App', '', '', null, build.onNotifications, cb );
  }

  // Get all the views for this build
  forAllViews( build, null, ( t: string, s: string, ss: string, idx: number ) => {
    // Get the view.
    const view: any = build.urls[ t ][ s ].sections[ ss ][ idx ];

    // If the view has an onData
    if ( view.onData ) {
      cb( t, s, ss, idx, 'onData', view.onData.actions, view.onData.errorActions );
    }

    // If the view has onNotifications
    if ( view.onNotifications ) {
      // Process all notification events.
      forAllNotifications( t, s, ss, idx, view.onNotifications, cb );
    }

    // If the view is a form...
    if ( view.type === 'form' ) {
      processForm( t, s, ss, idx, view, cb );
    }

    // If the view is a report...
    if ( view.type === 'report' ) {
      processView( t, s, ss, idx, view, cb );
    }

    // If the view is a tab...
    if ( view.type === 'tabs' ) {
      // Go through all the tabs and handle markdown actions in them.
      for ( let i = 0; i < view.tabs.length; i++ ) {
        const tb: any = view.tabs[ i ].tab;
        forAllMarkdownActions( t, s, ss, idx, tb, '(tab markdown)', cb );
      }
    }
  });
};
