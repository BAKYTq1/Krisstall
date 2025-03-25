import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";  
import axios from "axios";  

const API = 'https://api.sampleapis.com/coffee/hot';  

export const getCoffeeApi = createAsyncThunk(  
    'coffe/getcoffee',
    async (_, thunkAPI) => {  
        try {  
            const res = await axios.get(API);  
            return res.data;  
        } catch (error) {  
            return thunkAPI.rejectWithValue(error.message);  
        }  
    }  
)  

const CoffeeSlice = createSlice({  
    name: 'coffee', 
    initialState: {  
        data: [],  
        loading: false,  
        error: null   
    },  
    reducers: {},  
    extraReducers: (builder) => {  
        builder  
        .addCase(getCoffeeApi.pending, (state) => {  
            state.loading = true;  
            state.error = null;  
        })  
        .addCase(getCoffeeApi.fulfilled, (state, action) => { 
            state.data = action.payload; 
            state.loading = false;  
        })  
        .addCase(getCoffeeApi.rejected, (state, action) => {  
            state.loading = false;  
            state.error = action.payload;  
        })  
    }  
})  

export default CoffeeSlice.reducer;
