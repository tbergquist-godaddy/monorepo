const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    outfile: 'index.js',
    format: 'cjs',
    platform: 'node',
    bundle: true,
    minify: true,
  })
  .catch(() => process.exit(1));
