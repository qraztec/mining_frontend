import "./register.css"
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
export default function Register() {
    const email = useRef();
    const password = useRef();
    const role = useRef()
    const company = useRef()
    const showCompanyDropdown = (event) => {
        const companyDropdown = document.getElementById('companyDropdown');
        if (event.target.value === "Company") {
            companyDropdown.style.display = 'block';
        } else {
            companyDropdown.style.display = 'none';
        }
    };
   
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
            <form className="loginBox" >
                        <input placeholder="Email" type="email" required className="loginInput" ref = {email}/>
                        <input placeholder="Password" type="password" minLength="6" required className="loginInput" ref={password}/>
                        {/* Radio Buttons for Role */}
                        <div className="roleSelection">
                                <label>
                                    <input 
                                        type="radio" 
                                        name="role" 
                                        value="Community Member" 
                                        ref={role} 
                                        required 
                                        onChange={showCompanyDropdown} 
                                    /> 
                                    User
                                </label>
                                <label>
                                    <input 
                                        type="radio" 
                                        name="role" 
                                        value="Company" 
                                        ref={role} 
                                        required 
                                        onChange={showCompanyDropdown} 
                                    /> 
                                    Company
                                </label>
                                <label>
                                    <input 
                                        type="radio" 
                                        name="role" 
                                        value="Regulator" 
                                        ref={role} 
                                        required 
                                        onChange={showCompanyDropdown} 
                                    /> 
                                    Regulator
                                </label>
                            </div>

                            {/* Dropdown for Company - Initially Hidden */}
                            <div id="companyDropdown" style={{ display: 'none', marginTop: '20px' }}>
                                <select className="loginInput" ref={company} required>
                                    <option value="" disabled selected>Select Company</option>
                                    <option value="Mining Co.">Mining Co.</option>
                                    <option value="Eco Mining">Eco Mining</option>
                                    <option value="Sustain Mining">Sustain Mining</option>
                                </select>
                            </div>

                        <Button variant="contained" className="loginButton" type="submit">Register</Button>
                        <Button className="loginregisterButton">Have an Account? Login</Button>
            </form>
            </div>
            </div>
        </div>
        </>
    )
}