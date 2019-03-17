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
  const extraPlugins = [['styled-components', { ssr: true }]];

  return {
    presets,
    plugins: extraPlugins,
  };
};
