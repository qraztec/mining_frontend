import "./login.css"
import {useRef} from "react"
import {useNavigate} from "react-router-dom"
import * as React from 'react';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from "axios"
// import Checkbox from '@mui/material/Checkbox';
// import CssBaseline from '@mui/material/CssBaseline';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Divider from '@mui/material/Divider';
// import FormLabel from '@mui/material/FormLabel';
// import FormControl from '@mui/material/FormControl';
// import Link from '@mui/material/Link';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import Stack from '@mui/material/Stack';
// import MuiCard from '@mui/material/Card';
// import { styled } from '@mui/material/styles';
export default function Login() {
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate()
    const handleClick = async(e) => {
        e.preventDefault();
        
        const loginData = {
            email: email.current.value,
            password: password.current.value,
        };
        try {
            
            const response = await axios.post('https://mining-api-j318.onrender.com/login', loginData);
            console.log('success')
            // Assuming you get the role in the response data
            const role = response.data.user.role;
            
            // Redirect user based on their role
            if (role === 'Community Member') {
                
                navigate('/user-home'); // Redirect to UserHome component
            } else if (role === 'Company') {
                const companyID = response.data.user.company;
                console.log(companyID)
                navigate('/company-home', {state: {companyID}}); // Redirect to CompanyHome component
            } else if (role === 'Regulator') {
                navigate('/regulator-home'); // Redirect to RegulatorHome component
            } else {
                alert('Role not recognized');
            }
            
            // Optionally: Navigate to another page after successful login
            // window.location.href = '/dashboard'; // or use react-router-dom

        } catch (error) {
            // Handle error response (e.g., incorrect credentials)
            if (error.response && error.response.status === 401) {
                alert('Invalid credentials');
            } else if (error.response && error.response.status === 404) {
                alert('User not found');
            } else {
                console.error('Error during login:', error);
            }
        }
    }
    return (
        <>
        
        <div className = "login">
        
            <div className="loginWrapper">
            <div className = "loginLeft">
                <h3 className="loginLogo">MineSync</h3>
                <span className="loginDesc">
                    <p>Connect with all stakeholders in the mining industry.</p>
                    <p>Enhance communication and monitor sustainability of mining companies.</p>
                </span>
            </div>
            <div className = "loginRight">
            <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" required className="loginInput" ref = {email}/>
                        <input placeholder="Password" type="password" minLength="6" required className="loginInput" ref={password}/>
                        <Button variant="contained" className="loginButton" type="submit">Log In</Button>
                        <Button className="loginregisterButton">Create a New Account</Button>
            </form>
            </div>
            </div>
        </div>
        </>
    )
}