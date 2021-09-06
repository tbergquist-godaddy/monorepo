export interface Image {
  url: string;
  width: number;
  height: number;
}

export interface Feed {
  title: string;
  guid: string;
  content: string;
  link: string;
  image: Image | null;
  timestamp: number;
  source: string;
}
