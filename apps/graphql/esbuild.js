const esbuild = require('esbuild');
const aliasPlugin = require('esbuild-plugin-alias');

const alias = require('./alias');

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    outfile: 'index.js',
    format: 'cjs',
    platform: 'node',
    bundle: true,
    minify: true,
    plugins: [aliasPlugin(alias)],
  })
  .catch(() => process.exit(1));
