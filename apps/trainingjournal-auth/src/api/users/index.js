// @flow

import express from 'express';

import createUser from './createUser';

const router = express.Router();

router.post('/', createUser);
router.get('/', (req, res) => res.send('test')); // For testing, delete later

export default router;
