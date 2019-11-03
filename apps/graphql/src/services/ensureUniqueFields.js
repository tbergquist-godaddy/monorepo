// @flow strict

export default function ensureUniqueFields(
  queryObjects: $ReadOnlyArray<{ [key: string]: { ... }, ... }>,
) {
  return queryObjects.reduce((acc, curr) => {
    Object.keys(curr).forEach(key => {
      if (Object.prototype.hasOwnProperty.call(acc, key)) {
        throw new Error(`Duplicated field ${key}.`);
      }
    });
    return {
      ...acc,
      // $FlowFixMe (>=<0.111.1)
      ...curr,
    };
  }, {});
}
