// @flow strict

import express from 'express';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import registerRoutes from './api/router';

const app = express();

app.use(cors());
app.use(compression());
app.use(morgan('dev'));
app.use(bodyParser());

registerRoutes(app);

export default app;
