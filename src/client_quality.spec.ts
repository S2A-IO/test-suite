/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Entry point for all client quality test cases.
 */
import './client/quality/actions/go-back-should-not-have-other-tasks';
import './client/quality/actions/no-actions-check';
import './client/quality/actions/pr-not-allowed-in-default-app';
import './client/quality/actions/pr-notify-queue-should-have-correct-server-references';
import './client/quality/api/api';
import './client/quality/assets/mobile';
import './client/quality/assets/web';
import './client/quality/contexts/empty';
import './client/quality/contexts/onload';
import './client/quality/contexts/prefix';
import './client/quality/contexts/urls';
import './client/quality/forms/relation-key';
import './client/quality/general/general';
import './client/quality/general/url';
import './client/quality/queries/different-queries-should-not-have-same-reference';
import './client/quality/queries/queries-should-have-filter-references-when-using-filters';
import './client/quality/queries/queries-should-have-id-keys-for-merging';
import './client/quality/reports/no-data';
