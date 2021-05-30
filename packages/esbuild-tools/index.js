const esbuild = require('esbuild');
const path = require('path');
const { vanillaExtractPlugin } = require('@vanilla-extract/esbuild-plugin');

const pJson = require(path.resolve('./package.json'));

const commonConfig = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  plugins: [vanillaExtractPlugin()],
  target: ['es6'],
  inject: [path.join(__dirname, 'react-shim.js')],
  external: [
    ...Object.keys(pJson.dependencies ?? {}),
    ...Object.keys(pJson.peerDependencies ?? {}),
  ],
  define: {
    'process.env.NODE_ENV': "'production'",
  },
};

function buildPackage({ es, cjs }) {
  if (es) {
    esbuild
      .build({
        ...commonConfig,
        outfile: 'dist/es/index.js',
        format: 'esm',
        // These imports causes a fail in the nextjs build. TODO: Figure out why, and enable
        // footer: {
        //   js: 'import "./index.css"',
        // },
        ...es,
      })
      .catch(() => process.exit(1));
  }
  if (cjs) {
    esbuild
      .build({
        ...commonConfig,
        outfile: 'dist/cjs/index.js',
        format: 'cjs',
        // footer: {
        //   js: 'require("./index.css");',
        // },
        ...cjs,
      })
      .catch(() => process.exit(1));
  }
}

module.exports = buildPackage;
