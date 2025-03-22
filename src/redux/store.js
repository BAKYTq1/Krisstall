import { configureStore} from "@reduxjs/toolkit";

export const myStore = configureStore({

import { configureStore, } from "@reduxjs/toolkit";
import CakesReduser from './CakesApi/CakesApi'
import OtherReducer from './OtherApi/OtherApi'
const myStore = configureStore({

    reducer: {
        cakes: CakesReduser,
        other:OtherReducer,
    }
})

export default myStore;