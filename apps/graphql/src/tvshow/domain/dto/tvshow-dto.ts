export interface ITvshowDTO {
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
  cast?: null;
  episodes?: null;
  previousEpisode?: Date | null;
  nextEpisode?: Date | null;
  network: {
    id: number;
    name: string;
  };
}
