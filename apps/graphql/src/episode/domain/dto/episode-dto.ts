interface IImageDTO {
  medium: string;
  original: string;
}

export interface IEpisodeDTO {
  id: number;
  image: IImageDTO;
  name: string;
  season: number;
  number: number;
  airdate: string;
  summary: string;
  seasonAndNumber: string;
  tvshowId?: number | null;
  isWatched?: boolean;
}
