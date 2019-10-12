// @flow

import type { $Request, $Response } from 'express';

import UserRepository from '../../db/repositories/UserRepository';

export default async function createUser(req: $Request, res: $Response) {
  // TODO: Verify input, handle error
  const newUser = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  };
  const user = await UserRepository.createUser(newUser);
  res.status(201).json({ user });
}
