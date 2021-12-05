const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const monorepoRoot = path.resolve(__dirname, '../../../');
const workspaceJson = require(path.join(monorepoRoot, 'workspace.json'));

const getAffected = () => {
  return spawnSync('yarn', ['nx', 'affected:libs', '--plain'], {
    cwd: monorepoRoot,
  })
    .stdout.toString()
    .split(' ')
    .map((name) => name.replace('\n', ''))
    .join(',');
};
const stories = [];

const { PROJECTS } = process.env;
const projects = (PROJECTS ?? getAffected()).split(',');

const getAbsolutePath = (packageName) => {
  return path.join(monorepoRoot, workspaceJson.projects[packageName].root);
};
for (const project of projects) {
  if (!workspaceJson.projects[project] || project === '@tbergq/storybook') {
    continue;
  }
  const absolutePath = getAbsolutePath(project);
  const relativePath = path.relative(__dirname, absolutePath);
  stories.push(path.join(relativePath, '**/*.stories.@(js|jsx|ts|tsx)'));
}
console.log({ stories });
module.exports = {
  stories,
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: (config) => {
    config.plugins.push(new VanillaExtractPlugin());
    config.resolve.alias = {
      '@tbergq/components': path.join(getAbsolutePath('@tbergq/components'), 'src', 'index.ts'),
    };
    return config;
  },
};
