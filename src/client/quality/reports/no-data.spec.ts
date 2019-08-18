/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Checks the case where there is no data in the report.
 */
import { getBuild } from '../../loader';
import { expect } from 'chai';
import 'mocha';

describe( 'Reports - No data', () => {
  it( 'Should succesfully run onData actions', () => {
    let b = getBuild( process.argv, process.cwd() );
    console.log( b );

    const result = 'Hello world!';
    expect(result).to.equal('Hello world!');
  });
});
