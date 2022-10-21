import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import authService from "./authService";
const user =  localStorage.getItem('user');
const initialState = {
    user:user?user:null,
    isLoading:false,
    message:'',
    isError: false,
    isSuccess:false,
}

export const signup = createAsyncThunk('auth/signup', async(formdata, thunkAPI)=>{
    try{
            return await authService.signup(formdata);
    }
    catch(e){
        const message  = e.message;
        return thunkAPI.rejectWithValue(message)
    }
})

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        reset:() =>{

        },
    },
    extraReducers:(builder)=>{
        builder.addCase(signup.pending, (state, action)=>{
            state.isLoading = true;
            state.isSuccess = false;
        }).addCase(signup.fulfilled, (state, action)=>{
            state.user = action.payload.formdata;
            state.isLoading = false;
            state.isSuccess = true;
        }).addCase(signup.rejected, (state, action)=>{
            state.isError = true;
            state.isLoading = false;
        })

    }

})

export default authSlice.reducer;
export const { reset} =  authSlice.actions;
