// @flow strict-local

import { TOKEN_KEY } from '@tbergq/utils';

/*::
type Request = {
  +body: { [key: string]: string, ... },
};

*/
export default function logout(req /* : Request */, res /* : http$ServerResponse */) {
  res.setHeader('Set-Cookie', `${TOKEN_KEY}=''}; Expires=${new Date().toUTCString()}; Path=/`);
  res.writeHead(302, {
    Location: '/',
  });
  res.end();
}
