// @flow

import publish from '@adeira/monorepo-npm-publisher';
import path from 'path';
import os from 'os';

(async () => {
  await publish({
    dryRun: true,
    buildCache: path.join(os.tmpdir(), 'monorepo', 'workspaces'),
    workspaces: new Set(['@tbergq/components', '@tbergq/theme']),
    npmAuthToken: '',
  });
})();
