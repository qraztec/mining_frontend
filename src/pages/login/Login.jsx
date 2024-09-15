import "./login.css"
import {useRef} from "react"

import * as React from 'react';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
    const handleClick = (e) => {
        e.preventDefault();
        console.log(email.current.value)
        console.log(password.current.value)
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