// @flow

/*::
 
type ApiType = {|
  +cache: {|
    forever: () => void
  |},
  +assertVersion: number => void,
|}
 
*/

module.exports = function(api /*: ApiType */) /* :Object */ {
  api.assertVersion(7);
  api.cache.forever();

  const presets = ['@adeira/babel-preset-adeira'];
  const extraPlugins = ['relay'];

  return {
    presets,
    plugins: extraPlugins,
    babelrcRoots: ['.', './apps/*', './packages/*'],
  };
};
