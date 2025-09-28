// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { addTopping, removeTopping, toggleGlutenFree } from "./pizzaSlice";
import type { RootState } from "./store/store";

function App() {
  const pizza = useSelector((state: RootState) => state.pizza);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Pizza</h1>
      {pizza.toppings.map((topping: string, index: number) => (
        <div key={index}>{topping}</div>
      ))}
      <button onClick={() => dispatch(addTopping("pineapple"))}>
        Add Pineapple
      </button>
      <button onClick={() => dispatch(removeTopping("onions"))}>
        Remove Onions
      </button>
      <button onClick={() => dispatch(toggleGlutenFree())}>
        Toggle Gluten Free (Currently {pizza.gluten ? "Yes" : "No"})
      </button>
    </>
  );
}

export default App;
