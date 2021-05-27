import React from 'react'
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import PhoneDisabledIcon from '@material-ui/icons/PhoneDisabled';

const Connection:React.FC<{channel:string,server:string}> = ({channel,server}) => {
    return (
        <div className="connection">
            <div className="connection-info">
            <div className="connection-status">
            <SignalCellularAltIcon className="signal" />
            <h4>Voice Connected</h4>
            </div>
            <p>{channel}/{server}</p>
            </div>
            <PhoneDisabledIcon className="disconnect"/>
        </div>
    )
}

export default Connection

