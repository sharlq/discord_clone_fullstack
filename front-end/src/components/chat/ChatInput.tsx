import React ,{useState} from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import {useSelector} from "react-redux"
import {selectChannelId} from "../../features/appSlice"
import {selectUser} from "../../features/userSlice"
import firebase from 'firebase'
import db from "../../firebase"
import axios from 'axios'
const ChatInput = () => {
    const user = useSelector(selectUser)
    const [input,setInput] = useState("")
    const channelId = useSelector(selectChannelId)
    const sendMessage = (e:React.MouseEvent<HTMLButtonElement>) =>{
            e.preventDefault();
           axios.post(`/new/message?id=${channelId}`,{
               message:input,
               timestamp: Date.now(),
               user:user
           })
             console.log(channelId)
        
    }
    return (
        <div className = "chatInput">
            <AddCircleIcon />
            <form >
                <input
                disabled={!channelId}
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                type="text" placeholder={`Message #Channel`} />
                 <button type="submit" onClick={e=>sendMessage(e)}>Send Message</button>
            </form>
            <CardGiftcardIcon/>
            <GifIcon className="Gif"/>
            <EmojiEmotionsIcon/>
            
        </div>
    )
}

export default ChatInput
