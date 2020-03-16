// @flow

import express, { type $Request, type $Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import compression from 'compression';

import streamFile from './streamFile';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(compression());

app.get('/', (req: $Request, res: $Response) => {
  res.json({ test: 'lol' });
});

app.get('/stream', streamFile);

app.listen(5005, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 5005');
});
