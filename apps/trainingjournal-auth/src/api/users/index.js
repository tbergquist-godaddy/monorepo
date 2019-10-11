// @flow

import express from 'express';

import createUser from './createUser';

const router = express.Router();

router.post('/', createUser);

export default router;
