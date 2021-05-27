import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChannelsGroup from './channelsGroup'
import firebase from 'firebase'

const Server:React.FC = () => {
    return (
        <div className="server">
            
            <h4 className="server-name">Channel Name <ExpandMoreIcon/> </h4>
            <ChannelsGroup  />
        </div>
    )
}

export default Server
