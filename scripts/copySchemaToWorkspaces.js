// @flow

import fs from 'fs';
import path from 'path';

const schemaPath = path.join(__dirname, '..', 'schema.graphql');
const appsPath = path.join(__dirname, '..', 'apps');

const apps = fs.readdirSync(appsPath);

apps.forEach(app => {
  const appPath = path.join(appsPath, app);
  const stat = fs.statSync(appPath);
  if (stat.isDirectory()) {
    fs.copyFileSync(schemaPath, path.join(appPath, 'schema.graphql'));
  }
});

fs.unlinkSync(schemaPath);
