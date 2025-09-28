import { createSlice } from "@reduxjs/toolkit";

export interface PizzaState {
  toppings: string[];
  gluten: boolean;
}
export const initialState = {
  toppings: [
    "pepperoni",
    "mushrooms",
    "onions",
    "sausage",
    "bacon",
    "extra cheese",
  ],
  gluten: true,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    addTopping: (state, action) => {
      state.toppings.push(action.payload);
    },
    removeTopping: (state, action) => {
      state.toppings = state.toppings.filter(
        (topping) => topping !== action.payload
      );
    },
    toggleGlutenFree: (state) => {
      state.gluten = !state.gluten;
    },
  },
});

export const { addTopping, removeTopping, toggleGlutenFree } =
  pizzaSlice.actions;

export default pizzaSlice.reducer;
