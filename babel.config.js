// @flow

/*::
 
type ApiType = {|
  +cache: {|
    forever: () => void
  |},
  +assertVersion: number => void,
|}
 
*/

module.exports = function(api /*: ApiType */) {
  api.assertVersion(7);
  api.cache.forever();

  const presets = ['@kiwicom/babel-preset-kiwicom'];
  const extraPlugins = [];

  return {
    presets,
    plugins: extraPlugins,
  };
};
