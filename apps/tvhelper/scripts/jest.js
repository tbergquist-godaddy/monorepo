// @flow

import { configure } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

jest.mock('@tbergq/relay/src/Environment');
configure({ testIdAttribute: 'data-test' });
