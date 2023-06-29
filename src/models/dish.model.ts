import { Image } from '~/models/image.model';

export interface Dish {
  _id: string;
  name: string;
  image: Image;
  price: number;
  description: string;
}
