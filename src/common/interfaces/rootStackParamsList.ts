import { Restaurant } from '~/common/interfaces/restaurant.interface';
import { ParamListBase } from '@react-navigation/native';

export interface RootStackParamsList extends ParamListBase {
  Home: {};
  Restaurant: { restaurant: Restaurant };
}
