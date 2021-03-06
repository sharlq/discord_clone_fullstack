import React, { MouseEvent,useState,useEffect } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import Channel from './channel';
import firebase from 'firebase'
import db from '../../../firebase';
import axios from '../../../axios';
import Pusher from 'pusher-js';
interface Channell  {
    _id: string | null |undefined,
    channelName: string |null | undefined
}
const ChannelsGroup:React.FC = () => {
    const PUSHER_KEY =process.env.REACT_APP_PUSHER_KEY;
    const pusher = new Pusher(PUSHER_KEY!, {
        cluster: 'ap2'
      });
 const [channels,setChannels] = useState<Channell[]|null|undefined>(null)
 const getchannels = () =>{
     axios.get('/get/channelList')
     .then((res)=>{
         console.log(res.data)
         setChannels(res.data)
     })
 }
 useEffect(()=>{
    getchannels()
    const channel = pusher.subscribe('channels');
    channel.bind('newChannel', function() {
        getchannels()
    });
 },[])

const handleAddChannel =(e:MouseEvent<SVGSVGElement>) =>{
    e.preventDefault();
    const channelName = prompt("Enter a new channel name")
    if(channelName){
        axios.post('new/channel',{
            channelName:channelName
        })
    }
}
    return (
        <div className="channelsGroup">
            <div className="channelsGroup-header"> 
            <div className="channelsGroup-header_title">
            <ExpandMoreIcon className="expand"/> <h5>Text Channel</h5>
            </div>
            <AddIcon onClick={(e)=>handleAddChannel(e)} className="addIcon"/>
            </div>
            {channels ? channels.map((ch):JSX.Element=><Channel id={ch._id} channel={ch.channelName} />):null }
        </div>
    )
}

export default ChannelsGroup
