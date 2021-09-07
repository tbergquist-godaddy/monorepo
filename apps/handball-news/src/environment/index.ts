import { invariant } from '@adeira/js';

const { STREGSPILLER_RSS_FEED: _STREGSPILLER_RSS_FEED } = process.env;

invariant(
  _STREGSPILLER_RSS_FEED != null,
  'Expected STREGSPILLER_RSS_FEED to be defined, but it was not',
);

export const STREGSPILLER_RSS_FEED: string = _STREGSPILLER_RSS_FEED;
