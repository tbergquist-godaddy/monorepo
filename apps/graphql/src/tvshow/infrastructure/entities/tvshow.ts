interface TvShowServer {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: Array<string>;
  status: string;
  runtime: number;
  premiered: string;
  officialSite: string;
  schedule: {
    time: string;
    days: Array<string>;
  };
  rating: { average: number };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
  };
  webChannel: null;
  externals: {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    prevoiusepisode: {
      href: string;
    };
  };
}
export type SearchTvShowResponse = ReadonlyArray<{ score: number; show: TvShowServer }>;
export interface ITvshow {
  id: number;
  name: string;
  status: string;
  premiered: string;
  image: {
    medium: string;
    original: string;
  };
  rating: number;
  summary: string;
  network: {
    id: number;
    name: string;
  };
}
