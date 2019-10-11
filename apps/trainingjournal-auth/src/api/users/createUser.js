// @flow

import type { $Request, $Response } from 'express';

export default function createUser(req: $Request, res: $Response) {
  res.status(201).json({ json: 'test' });
}
