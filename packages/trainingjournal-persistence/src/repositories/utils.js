// @flow strict

import { Types } from 'mongoose';

export const toObjectId = (id: string) => {
  // $FlowFixMe: Cannot call Types.ObjectId because a call signature declaring the expected parameter / return type is missing in statics of bson$ObjectId
  return Types.ObjectId(id);
};
