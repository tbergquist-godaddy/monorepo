// @flow

import type { $Request, $Response } from 'express';

import UserRepository from '../../db/repositories/UserRepository';

// TODO: Move to BE-utils workspace 🤔
function validateBody(body: { [key: string]: any, ... }, requiredFields: $ReadOnlyArray<string>) {
  for (const key of requiredFields) {
    if (body[key] == null) {
      throw new Error(`Missing required input field ${key}`);
    }
  }
}

export default async function createUser(req: $Request, res: $Response) {
  try {
    validateBody(req.body, ['username', 'password', 'email']);
  } catch (e) {
    return res.status(422).json({ error: e.message });
  }
  try {
    const { username, password, email } = req.body;
    const user = await UserRepository.createUser({ username, password, email });
    return res.status(201).json(user);
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
}
