// @flow

import { LoginReply } from './__generated__/auth_pb';

export function login(call: $FlowFixMe, callback: $FlowFixMe) {
  const reply = new LoginReply(['', 'token', true]);
  callback(null, reply);
}
