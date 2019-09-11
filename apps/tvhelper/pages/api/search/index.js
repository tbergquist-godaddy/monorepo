// @flow

type Request = {|
  +method: string,
  +body: {|
    +query?: string,
  |},
|};

type Response = {|
  +writeHead: (number, ?{| +Location: string |}) => void,
  +end: (?string) => void,
  +status: number => void,
|};

export default function Search(req: Request, res: Response) {
  if (req.method === 'POST') {
    const query = req.body.query ?? '';

    res.writeHead(302, {
      Location: `/?query=${query}`,
    });
    res.end();
  } else {
    res.writeHead(405);
    res.end('Method not allowed');
  }
}
