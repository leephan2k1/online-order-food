import { Restaurant } from '~/models/restaurant.model';
import { ParamListBase } from '@react-navigation/native';

export interface RootStackParamsList extends ParamListBase {
  Home: {};
  Restaurant: { restaurant: Restaurant };
  Cart: {};
  PreparingOrder: {};
  Delivery: {};
}
