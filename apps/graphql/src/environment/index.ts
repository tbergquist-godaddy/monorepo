import { invariant } from '@adeira/js';
import { config } from 'dotenv';

config();

const { TMDB_API_KEY: _TMDB_API_KEY } = process.env;

invariant(_TMDB_API_KEY != null, 'expected TMDB_API_KEY to be defined, but it was not');

export const TMDB_API_KEY: string = _TMDB_API_KEY;
