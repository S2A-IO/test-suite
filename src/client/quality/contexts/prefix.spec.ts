/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Checks the correct usage of prefix.
 */
import { getBuild } from '../../loader';
import { assert } from 'chai';
import 'mocha';

describe( 'Contexts - Prefix', () => {
  const build: any = getBuild( process.argv, process.cwd() );

  describe( '# Check for unreachable prefix', () => {
    const ctxt: any[] = build.context;

    // Check all contexts.
    for ( let i = 0; i < ctxt.length; i++ ) {
      const c: any = ctxt[ i ];

      // Check each prefix.
      it( 'Prefix: ' + c.prefix, () => {
        // Ensure that no context that comes before this context has a prefix that
        // matches this prefix.
        for ( let j = i - 1; j >= 0; j-- ) {
          const prev: any = ctxt[ j ];
          assert( !c.prefix.startsWith( prev.prefix ), c.prefix +
            ' is unreachable because of ' + prev.prefix );
        }
      });
    }
  });
});
