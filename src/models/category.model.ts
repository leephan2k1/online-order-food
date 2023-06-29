import { Image } from '~/models/image.model';

export interface Category {
  _id: string;
  description: string;
  image: Image;
  name: string;
}
