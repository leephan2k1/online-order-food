import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dish } from '~/models/dish.model';
import { RootState } from '~/store';

const initialState: { items: Dish[] } = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Dish>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<Dish>) => {
      const clonedItems = Array.from(state.items);
      const deleteItemIndex = state.items.findIndex(
        (i) => String(i._id) === String(action.payload._id),
      );

      if (deleteItemIndex !== -1) {
        clonedItems.splice(deleteItemIndex, 1);
      }

      state.items = clonedItems;
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, emptyCart, removeFromCart } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectIemId = (state: RootState, id: string) => id;

export const selectCartItemsById = createSelector(
  [selectCartItems, selectIemId],
  (items, id: string) => {
    return items.filter((e) => e._id === id);
  },
);

export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

export default cartSlice.reducer;
