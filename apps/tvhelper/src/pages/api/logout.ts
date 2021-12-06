import { TOKEN_KEY } from 'environment';
import { NextApiResponse, NextApiRequest } from 'next';

export default function logout(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Set-Cookie', `${TOKEN_KEY}=''}; Expires=${new Date().toUTCString()}; Path=/`);
  res.writeHead(302, {
    Location: '/',
  });
  res.end();
}
