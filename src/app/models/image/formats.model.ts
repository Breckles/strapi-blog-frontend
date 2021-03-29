export interface Formats {
  [name: string]: {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path: any;
    url: string;
  };
}
