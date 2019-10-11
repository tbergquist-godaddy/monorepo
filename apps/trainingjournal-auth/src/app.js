// @flow strict

import express from 'express';

import registerRoutes from './api/router';

const app = express();

registerRoutes(app);

export default app;
