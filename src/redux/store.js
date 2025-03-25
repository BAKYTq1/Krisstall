import { configureStore } from "@reduxjs/toolkit";
import CakesReducer from './CakesApi/CakesApi';
import OtherReducer from './OtherApi/OtherApi';

const myStore = configureStore({
    reducer: {
        cakes: CakesReducer,
        other: OtherReducer,
    }

import CakesReducer from "./CakesApi/CakesApi";
import OtherReducer from "./OtherApi/OtherApi";
import CoffeeReducer from './Coffeapi/CoffeApi'


const myStore = configureStore({
  reducer: {
    cakes: CakesReducer,
    other: OtherReducer,
    coffee: CoffeeReducer,  
  },

});

export default myStore;
