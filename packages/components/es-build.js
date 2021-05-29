const { vanillaExtractPlugin } = require('@vanilla-extract/esbuild-plugin');

const pJson = require('./package.json');

const commonConfig = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  plugins: [vanillaExtractPlugin()],
  target: ['es6'],
  inject: ['./react-shim.js'],
  external: [
    ...Object.keys(pJson.dependencies ?? {}),
    ...Object.keys(pJson.peerDependencies ?? {}),
  ],
  define: {
    'process.env.NODE_ENV': "'production'",
  },
};

require('esbuild')
  .build({
    ...commonConfig,
    outfile: 'dist/es/index.js',
    // outdir: 'dist/es',
    format: 'esm',
  })
  .catch(() => process.exit(1));

require('esbuild')
  .build({
    ...commonConfig,
    outfile: 'dist/cjs/index.js',
    // outdir: 'dist/cjs',
    format: 'cjs',
  })
  .catch(() => process.exit(1));
