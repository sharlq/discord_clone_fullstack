import React ,{useEffect} from 'react';
import Sidebar from './components/sidebar/sidebar'
import Chat from './components/chat/Chat'
import Login from './components/login/login'
import { useSelector,useDispatch } from 'react-redux'
import {  selectUser } from './features/userSlice'
import {auth} from './firebase'
import {login, logout} from './features/userSlice'
const App =() => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)
 useEffect(()=>{
   auth.onAuthStateChanged((authUser)=>{
     if(authUser){
      
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
          )
        
      
     }else{
      dispatch(logout())
     }
   })
 },[dispatch])
  return (
    <div className="App">
      {user.uid!=="" ? (
      <>
      <Sidebar/>
      <Chat/>
      </>
      ):(
        <Login/>
      )}
    </div>
  );
} 

export default App;
