import { Image } from './image/image.model';

export interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  image: Image;
  published_on: string;
}
