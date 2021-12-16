import { invariant } from '@adeira/js';

const { JWT_SECRET } = process.env;

invariant(JWT_SECRET != null, 'JWT_SECRET is required');
export const jwtSecret = JWT_SECRET;
