// @flow strict-local

import fetch from '@adeira/fetch';
import { TOKEN_KEY } from '@tbergq/utils';
import { addYears } from 'date-fns';
import { invariant } from '@adeira/js';

/* ::
type Request = {
  +body: { [key: string]: string, ... },
  +method: 'GET' | 'POST',
};

type LoginResponse = {
  +data: {
    +tvHelperLogin: ?{
      +token: ?string,
      +success: ?boolean,
    },
  },
};
 */
const { GRAPHQL_URL } = process.env;
invariant(GRAPHQL_URL != null, 'You need to set GRAPHQL_URL');

export default async function login(req /* : Request */, res /* : http$ServerResponse */) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    try {
      const response = await fetch(GRAPHQL_URL, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          variables: { username, password },
          query: `mutation login($username: String!, $password: String!) {
        tvHelperLogin(username: $username, password: $password) {
          token
          success
        }
      }`,
        }),
      });

      const json /* : LoginResponse */ = await response.json();
      if (json.data.tvHelperLogin?.success !== true) {
        throw new Error('Login failed');
      }
      res.setHeader(
        'Set-Cookie',
        `${TOKEN_KEY}=${json.data.tvHelperLogin.token ?? ''}; Expires=${addYears(
          new Date(),
          1,
        ).toUTCString()}; Path=/`,
      );
      res.writeHead(302, {
        Location: '/favorites',
      });
    } catch (e) {
      res.writeHead(302, {
        Location: '/login?responseError=true',
      });
    }
  } else {
    res.writeHead(405);
  }
  res.end();
}
