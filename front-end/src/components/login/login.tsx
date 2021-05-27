import React from 'react'
import Button from '@material-ui/core/Button'; 
import {auth,provider} from '../../firebase';
const Login = () => {
    const signIn = () =>{
        auth.signInWithPopup(provider).catch((error: { message: any; })=>alert(error.message))
    }
    return (
        <div className="login">
            <div className="login-logo" >
                <img 
                src="https://www.mediafire.com/convkey/5a78/eu048surjwi5xamzg.jpg"
                alt="discord logo"
                />
            </div>
            <Button variant="contained" color="primary" onClick={()=>signIn()}>
            SIGN IN
            </Button>
        </div>
    )
}

export default Login
