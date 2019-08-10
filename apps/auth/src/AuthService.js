// @flow

import { HelloReply } from './__generated__/auth_pb';

export function sayHello(call: $FlowFixMe, callback: $FlowFixMe) {
  const requestObject = call.request.toObject();

  const reply = new HelloReply([`Hello ${requestObject.name}`]);
  callback(null, reply);
}
