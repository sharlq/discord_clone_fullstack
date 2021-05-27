
import { createSlice } from '@reduxjs/toolkit'
import {RootState} from "../app/store"
const initialState = {
 user:{
     photo:"",
     uid:"",
     displayName:"",
     email:""
 }
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state,action)=>{
            state.user = action.payload
        },
        logout: (state)=>{
            state.user = {
                photo:"",
                uid:"",
                displayName:"",
                email:""
            }
        },
    }
});

export const { login,logout} = userSlice.actions
export const selectUser = (state:RootState) => state.user.user;
export default userSlice.reducer