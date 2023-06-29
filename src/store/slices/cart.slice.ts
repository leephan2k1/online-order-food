import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dish } from '~/common/interfaces/dish.interface';
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
        (i) => Number(i.id) === Number(action.payload.id),
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
export const selectIemId = (state: RootState, id: number) => id;

export const selectCartItemsById = createSelector(
  [selectCartItems, selectIemId],
  (items, id: number) => {
    return items.filter((e) => e.id === id);
  },
);

export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

export default cartSlice.reducer;
