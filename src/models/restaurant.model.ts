import { Image } from '~/models/image.model';
import { Dish } from '~/models/dish.model';

export interface Restaurant {
  _id: string;
  address: string;
  description: string;
  dishes: Dish[];
  image: Image;
  lat: number;
  lng: number;
  name: string;
  rating: number;
  reviews: string;
  type: { name: string };
}
