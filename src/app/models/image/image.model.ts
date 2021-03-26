import { Formats } from './formats.model';

export interface Image {
  url: string;
  alternativeText: string;
  formats: Formats;
}
