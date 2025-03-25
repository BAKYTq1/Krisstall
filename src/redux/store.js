import { configureStore } from "@reduxjs/toolkit";
// import CakesReducer from './CakesApi/CakesApi';
// import OtherReducer from './OtherApi/OtherApi';
import CakesReducer from "./CakesApi/CakesApi";
import OtherReducer from "./OtherApi/OtherApi";
import CoffeeReducer from "./Coffeapi/CoffeApi"; 
import cartReducer from './cart/cartSlice.js';

const myStore = configureStore({
  reducer: {
    cakes: CakesReducer,
    other: OtherReducer,
    coffee: CoffeeReducer,
    cart: cartReducer,
  },

});

export default myStore;
