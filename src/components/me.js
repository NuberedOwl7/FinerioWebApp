import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';




import axios from 'axios';
import  '../styles/login.css';


//components
import logo from '../assets/img//finl.png'


const useStyles = makeStyles((theme) => ({


    root: {
      width: '850px',
      
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));
  

function User() {

    const [user, setUser]= useState(null);
    const [movements, setMovemnt] = useState(null);

    const classes = useStyles();

    const localtoken =  window.localStorage.getItem('token');

    const token = JSON.parse(localtoken)

    const config = {
        headers: {'Authorization': `Bearer ${token}`}
    };


    

    function GetUser() {
         axios.get(
            'https://api.finerio.mx/api/me',
            config
             
        ).then(response => {
                console.log(response.data);
                setUser(response.data);
            })
    }

    function GetMovements(){
        axios.get(
            'https://api.finerio.mx/api/users/fa87102b-ddfd-4add-b9d1-d528895fcf45/movements',
            config
             
        ).then(response => {
                console.log(response.data);
                setMovemnt(response.data);
            })
    }
    
    useEffect(()=>{
        GetUser();       
        GetMovements();     
    },[]);

    

  return (

    
    
    <div className="wrapper fadeInDown">
     <meta name="viewport" content="width=device-width, initial-scale=1" />
      
        <div id="user">

            
            {
                //icon
            }
                <div className="fadeIn first">
                    <img  src={logo} id="icon_user" alt="User Icon" />

                </div>
            
            <div className="fadeIn second">
                {user ? (
                   
                    <div >
                       <h1>Hola {user.name}</h1>
                       <h2>Tu correo es {user.email}</h2>
                       <h3>Estos son tus movimientos:</h3> 
                    </div>                   
                ) :  null}
            </div>

            {
                //problema a resolver
            }
        <div >
             {movements ? (
              
                <List className={classes.root} >


                    {movements.data.map((item)=> (
                        <ListItem button key={item.id}>                                    

                            <ListItemText inset primary={item.type}/>
                            <ListItemText inset primary={item.description}/>
                            <ListItemText inset primary={item.amount}/>
                            <ListItemText inset primary={item.date}/>
                                   
                        
                        </ListItem>
                                
                        ))}  
                                 
                        </List>
                                    
                ) :  null} 
           </div>   
            

        </div>

    </div> 
  );
}

export default User;