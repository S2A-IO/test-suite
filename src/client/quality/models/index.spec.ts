/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Perform application specific tests on the models. We just include
 * the tests from the application.
 */
const path = require( 'path' );
import { getSrcRoot } from '../../loader';

const src: string = getSrcRoot( process.argv, process.cwd() );
require( path.join( src, 'models', 'index.spec' ) );
