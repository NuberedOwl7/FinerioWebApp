import React, {Fragment, useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";

//img
import logo from '../../assets/img/finl.png'

//Styles
import  '../../styles/login.css'

//components
import LoginService from './loginService'

const LoginForm= () =>{

    const history = useHistory()

    //States
    const [userName, setUsername]= useState();
    const [password, setPassword]= useState();
    //const [user, setUser]= useState(null);
    

    const handleLogin = async (e) =>{
        e.preventDefault();
        
        try{

            
            const credentials = {
                username: userName,
                password: password
            }
            
            const user = await LoginService(
               credentials
            );

            window.localStorage.setItem('token', JSON.stringify(user.access_token));
            
            history.push('/user');
            console.log('Submit')
        
        } catch(e){

            history.push('/invalid');

            setTimeout(()=>{
                history.push('/')
            },4000)
            
        }
       
    }

    return (
        <Fragment>
            
        <div className="wrapper fadeInDown">
            <div id="formContent">
                
    
                {
                    //icon
                }
                <div className="fadeIn first">
                    <img src={logo} id="icon" alt="User Icon" />
                </div>
    
                {
                    //Login Form 
                }
                <form onSubmit={handleLogin}>
                    <input 
                        type="text"
                        value={userName} 
                        id="login" 
                        className="fadeIn second" 
                        name="login" 
                        placeholder="User Name"
                        onChange={e => setUsername(e.target.value)} 
                    />
                    
                    <input 
                        type="password"
                        value={password} 
                        id="password" 
                        className="fadeIn third" 
                        name="login" 
                        placeholder="password"
                        onChange={e => setPassword(e.target.value)} 
                    />
    
                    <input 
                        type="submit" 
                        className="fadeIn fourth" 
                        value="Log In"
                    />
                </form>
    
            </div>
        </div>
        </Fragment>
    )
}

export default LoginForm;