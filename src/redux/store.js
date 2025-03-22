import { configureStore } from "@reduxjs/toolkit";
import CakesReducer from './CakesApi/CakesApi';
import OtherReducer from './OtherApi/OtherApi';

const myStore = configureStore({
    reducer: {
        cakes: CakesReducer,
        other: OtherReducer,
    }
});

export default myStore;
