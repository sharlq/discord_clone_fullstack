import React,{useState,useEffect} from 'react'
import Message from './message'
import db from "../../firebase"
import {useSelector} from "react-redux"
import {selectChannelId} from "../../features/appSlice"
import firebase from 'firebase'
import axios from 'axios'
const ChatMessages = () => {
    const [messages,setMessages]=useState<firebase.firestore.DocumentData[]>([])
    const channelId = useSelector(selectChannelId)
    const getConversation = (channelId:string|undefined) =>{
        if(channelId){
            axios.get(`/get/conversation?id=${channelId}`).then((res)=>{
                setMessages(res.data[0].conversation)
            })
        }
    }
    useEffect(()=>{
        getConversation(channelId)
        console.log(messages)
    },[channelId])
    console.log(messages)
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
