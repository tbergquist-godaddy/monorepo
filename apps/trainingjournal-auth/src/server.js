// @flow strict

import app from './app';

const { PORT } = process.env;

const port = PORT ?? 4000;

// eslint-disable-next-line no-console
app.listen(4000, () => console.log(`Example app listening on port ${port}!`));
