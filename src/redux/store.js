import { configureStore } from "@reduxjs/toolkit";
import CakesReducer from "./CakesApi/CakesApi";
import OtherReducer from "./OtherApi/OtherApi";
import { configureStore} from "@reduxjs/toolkit";
import CakesReduser from './CakesApi/CakesApi'
import OtherReducer from './OtherApi/OtherApi'
import CoffeeReducer from './Coffeapi/CoffeApi'


const myStore = configureStore({
  reducer: {
    cakes: CakesReducer,
    other: OtherReducer,
  },
});

export default myStore;
