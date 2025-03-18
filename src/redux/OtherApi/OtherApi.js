import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";  
import axios from "axios";  

const API = 'https://67d0143b823da0212a8480e9.mockapi.io/Combo';  

export const getOtherApi = createAsyncThunk(  
    'combo/getCombo',
    async (_, thunkAPI) => {  
        try {  
            const res = await axios.get(API);  
            console.log(res.data);            
            return res.data;  
        } catch (error) {  
            return thunkAPI.rejectWithValue(error.message);  
        }  
    }  
)  

const OtherapiSlice = createSlice({  
    name: 'other', 
    initialState: {  
        data: [],  
        loading: false,  
        error: null   
    },  
    reducers: {},  
    extraReducers: (builder) => {  
        builder  
        .addCase(getOtherApi.pending, (state) => {  
            state.loading = true;  
            state.error = null;  
        })  
        .addCase(getOtherApi.fulfilled, (state, action) => { 
            console.log(action);
            state.data = action.payload; 
            state.loading = false;  
        })  
        .addCase(getOtherApi.rejected, (state, action) => {  
            state.loading = false;  
            state.error = action.payload;  
        })  
    }  
})  

export default OtherapiSlice.reducer;
