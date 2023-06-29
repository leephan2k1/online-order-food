import { Restaurant } from '~/models/restaurant.model';

export interface Featured {
  _id: string;
  description: string;
  name: string;
  restaurants: Restaurant[];
}
