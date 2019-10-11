// @flow

import type { $Application } from 'express';

import userRoutes from './users';

export default function registerRoutes(app: $Application) {
  app.use('/api/users', userRoutes);
}
