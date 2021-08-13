import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




import axios from 'axios';
import  '../styles/login.css';


//components
import logo from '../assets/img//finl.png'


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });


  

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
            {movements ?(
                <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Tipo</TableCell>
                        <TableCell align="right">Descripcion</TableCell>
                        <TableCell align="right">Monto</TableCell>
                        <TableCell align="right">Fecha</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                      

                            {movements.data.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell component="th" scope="row">
                                         {item.type}
                                    </TableCell>
                                <TableCell align="right">{item.description}</TableCell>
                                <TableCell align="right">{item.amount}</TableCell>
                                <TableCell align="right">{item.date}</TableCell>

                                
                                
                              </TableRow>
                            ))}
                                            
                                
                                                
                            
                        </TableBody>
                    </Table>
                </TableContainer>  
             ):  null} 
           </div>   
            

        </div>

    </div> 
  );
}

export default User;