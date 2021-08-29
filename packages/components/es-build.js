// eslint-disable-next-line @typescript-eslint/no-var-requires
const build = require('@tbergq/esbuild-tools');

const watch = process.argv.includes('--watch');

build({
  es: { watch },
  cjs: { watch },
});
