/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Checks the web assets.
 */
const { JitClient } = require( 'jit/client' );

import { getBuild } from '../../loader';
import { assert } from 'chai';
import 'mocha';

describe( 'API Keys - Connectivity', () => {
  let build: any = getBuild( process.argv, process.cwd() );
  let client: any;

  // Check connectivity with anonmous user.
  it( 'Should connect with anonymous user', () => {
    let jit = build.apiKeys.jit;
    client = new JitClient( jit.remoteUrl, build.path + '/' + jit.clientId,
      '', jit.clientScopes );

    // Now connect.
    return client.reconnect( build.path + '/' + jit.clientId, jit.clientToken )
    .then( function OnClientConnected() {
      // Make a search request. This will confirm if the token is correct as an
      // error will return otherwise.
      return client.search( build.path, 'Users', 'check-connection-from-test-suite', {},
        0, true );
    });
  });
});
