import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Restaurant } from '~/common/interfaces/restaurant.interface';
import { RootState } from '~/store';

const initialState: { restaurant: Restaurant | null } = {
  restaurant: null,
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<Restaurant>) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state: RootState) =>
  state.restaurant.restaurant;

export default restaurantSlice.reducer;
