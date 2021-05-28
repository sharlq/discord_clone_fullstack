import React from 'react'
import Avatar from '@material-ui/core/Avatar';
const Message:React.FC<{name:string,content:string,timeStamp:any,pic?:string}> = ({name,content,timeStamp,pic}) => {
    return (
        <div className="message">
            <Avatar src={pic} alt={name}/>
            <div className='info'>
                <div className='message-header'>
                    <h4 className="message-header_name">{name}</h4>
                    <p className="message-header_timeStamp">{timeStamp?(timeStamp):"just now"}</p>
                </div>
                <p className="message_content">{content}</p>
            </div>
        </div>
    )
}

export default Message
