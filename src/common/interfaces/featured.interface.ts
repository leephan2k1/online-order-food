import { Restaurant } from '~/common/interfaces/restaurant.interface';

export interface Featured {
  id: string;
  title: string;
  description: string;
  restaurants: Restaurant[];
}
