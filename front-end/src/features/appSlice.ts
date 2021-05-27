import { createSlice } from '@reduxjs/toolkit'
import {RootState} from "../app/store"
const initialState = {
    channelId:undefined,
    channelName:null
    
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setChannelInfo:(state,action)=>{
            state.channelId = action.payload.channelId;
            state.channelName = action.payload.channelName;
        }
    }
});

export const { setChannelInfo } = appSlice.actions
export const selectChannelId =(state:RootState) => state.app.channelId;
export const selectChannelName = (state:RootState) => state.app.channelName;
export default appSlice.reducer