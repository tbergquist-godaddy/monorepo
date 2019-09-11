// @flow

import { configure } from '@testing-library/react';

jest.mock('@tbergq/relay/src/Environment');
configure({ testIdAttribute: 'data-test' });
