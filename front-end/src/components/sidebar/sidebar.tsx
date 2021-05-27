
import SidebarProfile from './SidebarProfile'
import Server from './server/server'
import Connection from './connection'
import {useSelector} from 'react-redux'
import {selectUser} from  '../../features/userSlice'


const Sidebar = ({}) => {
    const user = useSelector(selectUser);
   
    return (
        <div className="sidebar">
            <Server />
            <Connection channel={"channel1"} server={"server name"} />
           <SidebarProfile pic={user.photo} id={user.uid} name={user.displayName}/>
        </div>
    )
}



export default Sidebar
