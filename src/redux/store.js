import { configureStore} from "@reduxjs/toolkit";
import CakesReduser from './CakesApi/CakesApi'
import OtherReducer from './OtherApi/OtherApi'
import CoffeeReducer from './Coffeapi/CoffeApi'


const myStore = configureStore({

    reducer: {
        cakes: CakesReduser,
        other:OtherReducer,
        coffee: CoffeeReducer, 
    }
})

export default myStore;