import axios from 'axios';

const baseUrl = 'https://api.finerio.mx/api/login'

const LoginService = async (credentials) => {
    const data = await axios.post(baseUrl, credentials);
    
    
    console.log(data);
    return data.data
   
}

export default LoginService;  