/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Entry point for all client performance test cases.
 */
import './client/performance/navigation/no-network-operation-before-redirect';
import './client/performance/queries/queries-should-always-have-a-limit';
import './client/performance/queries/queries-should-have-refresh-time-greater-than-5-mins';
import './client/performance/queries/similar-queries-should-not-have-different-reference';
import './client/performance/queries/with-larger-resultset-use-projections';
