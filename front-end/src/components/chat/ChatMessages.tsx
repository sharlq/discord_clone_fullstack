import React,{useState,useEffect} from 'react'
import Message from './message'
import db from "../../firebase"
import {useSelector} from "react-redux"
import {selectChannelId} from "../../features/appSlice"
import firebase from 'firebase'
import axios from '../../axios'
import Pusher from 'pusher-js';

const ChatMessages = () => {
    const PUSHER_KEY =process.env.REACT_APP_PUSHER_KEY;
    const [messages,setMessages]=useState<firebase.firestore.DocumentData[]>([])
    const channelId = useSelector(selectChannelId)
    const getConversation = (channelId:string|undefined) =>{
        if(channelId){
            axios.get(`get/conversation?id=${channelId}`).then((res)=>{
                setMessages(res.data[0].conversation)
                console.log(res.data)
            }).catch((err)=>{
                console.log(err.message)
            })
        }

    }
    
    const pusher = new Pusher(PUSHER_KEY!, {
        cluster: 'ap2'
      });
    useEffect(()=>{
        console.log(process.env.REACT_APP_PUSHER_KEY)
        getConversation(channelId)
        const channel = pusher.subscribe('conversaton');
        channel.bind('newMessage', function() {
            getConversation(channelId)
        });
    },[channelId])
    
    return (
        <div className="chatMessages">
            {
            messages.map((m)=>
            <Message 
            pic={m.user.photo}
            name={m.user.displayName} 
            timeStamp={m.timestamp} 
            content={m.message}/>
            )
            
            }
            
        </div>
    )
}

export default ChatMessages
