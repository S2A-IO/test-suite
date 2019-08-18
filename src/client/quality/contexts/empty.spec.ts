/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Checks the correct usage of prefix.
 */
import { getBuild } from '../../loader';
import { assert } from 'chai';
import 'mocha';

describe( 'Contexts - Need', () => {
  let build: any = getBuild( process.argv, process.cwd() );

  describe( '# Check if the context is really needed', () => {
    let ctxt: any[] = build.context;

    // Check all contexts.
    for ( let i = 0; i < ctxt.length; i++ ) {
      let c: any = ctxt[ i ];

      // Check each prefix.
      it( 'Prefix: ' + c.prefix, () => {
        // If the fallback url is specified, check if it exists.
        assert( c.fallback || c.nav || c.rightSide || c.leftSide || c.onLoad ||
          c.maxCols || c.maxColsMobile, 'This context is empty. Is it needed?' );
      });
    }
  });
});
