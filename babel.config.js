// @flow

/*::
 
type ApiType = {|
  +assertVersion: number => void,
  +cache: {|
    forever: () => void,
  |},
  +caller: (Caller => boolean) => boolean,
|};

type Caller = {|
  +name: string,
|};
 
*/

function isWebpack(caller) /*: boolean %checks */ {
  // https://github.com/babel/babel-loader
  return !!(caller && caller.name === 'babel-loader');
}

module.exports = function(api /*: ApiType */) /* :Object */ {
  api.assertVersion(7);

  const presets = [
    ['@adeira/babel-preset-adeira', { target: api.caller(isWebpack) ? 'js-esm' : 'js' }],
  ];

  return {
    presets,
    babelrcRoots: ['.', './apps/*', './packages/*'],
  };
};
