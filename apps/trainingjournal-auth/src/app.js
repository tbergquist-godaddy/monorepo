// @flow strict

import express from 'express';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';

import registerRoutes from './api/router';

const app = express();

app.use(cors());
app.use(compression());
app.use(morgan('dev'));

registerRoutes(app);

export default app;
