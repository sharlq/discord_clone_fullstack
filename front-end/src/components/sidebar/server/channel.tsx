import React from 'react'
import firebase from 'firebase'
import { useDispatch} from 'react-redux'
import {setChannelInfo} from '../../../features/appSlice'

const Channel:React.FC<{id:string|undefined|null,channel:string | null |undefined |firebase.firestore.DocumentData}> = ({id,channel}) => {
   const dispatch = useDispatch();
    return (
        <div
         onClick={()=>{
             dispatch(
                setChannelInfo({
                     channelId:id,
                     channelName:channel,
                 })
             )
         }}
         className="sidebarChannel">
            <h4>  <span className="sidebarChannel_hash">#</span>{channel}</h4>
        </div>
    )
}

export default Channel
