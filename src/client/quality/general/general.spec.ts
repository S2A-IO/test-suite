/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Checks the general construction of the class.
 */
import { getBuild } from '../../loader';
import { assert } from 'chai';
import 'mocha';

describe( 'Build - General', () => {
  it( 'Should succesfully instantiate the application', () => {
    let build = getBuild( process.argv, process.cwd() );
    assert( build != null, 'Build is not null' );
  });
});
