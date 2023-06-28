import { Restaurant } from '~/common/interfaces/restaurant.interface';

export interface Featured {
  id: number;
  title: string;
  description: string;
  restaurants: Restaurant[];
}
