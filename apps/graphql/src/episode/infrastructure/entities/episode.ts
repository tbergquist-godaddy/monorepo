interface Image {
  medium: string;
  original: string;
}
export interface TvMazeEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airstamp: string;
  runtime: number;
  image: Image;
  summary: string;
  _links_: {
    self: {
      href: string;
    };
  };
}

export interface IEpisode {
  id: number;
  image: Image;
  name: string;
  season: number;
  number: number;
  airdate: string;
  summary: string;
}
