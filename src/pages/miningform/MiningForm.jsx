import React, { useState } from "react";
import { TextField, MenuItem, Button, Select, InputLabel, FormControl } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import "./miningform.css";
import axios from "axios"
import {useLocation, useNavigate} from "react-router-dom"

export default function MiningForm() {
    const navigate = useNavigate()
    const location = useLocation();
    const { company, area } = location.state;
    const [answers, setAnswers] = useState({
        pollutionControl: "",
        communityEngagement: "",
        waterRecycling: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAnswers({
            ...answers,
            [name]: value,
        });
    };

   

    const handleSubmit = async(event) => {
        event.preventDefault();
        // Here you can handle the form submission, e.g., send the data to the backend
        const data = {
            pollutionControl: answers.pollutionControl,
            communityEngagement: answers.communityEngagement,
            waterRecycling: answers.waterRecycling,
        };
        console.log(data)
        try {
            // Send the form answers to the backend
            const aiResponse = await axios.post('https://nppk1se46l.execute-api.us-west-2.amazonaws.com/evaluate', data);
            console.log("sucess ai")
            console.log(aiResponse)
            const { pollution_control, food_sovereignty, water_recycling } = aiResponse.data;
            const operability_score = (pollution_control + food_sovereignty + water_recycling) / 3;
            const sentiment_score = 0
            const sustainability_score = (operability_score + sentiment_score) / 2;
            console.log(operability_score)
            // Prepare the operation data for storing
            const operationData = {
                companyID: company,
                area,
                operability_score,
                sentiment_score, // You can add logic for this
                sustainability_metrics: {
                    pollution_control,
                    food_sovereignty,
                    water_recycling
                },
                sustainability_score
            };
            console.log(operationData)

            // Send the final data to the backend for saving to the database
            await axios.post('https://nppk1se46l.execute-api.us-west-2.amazonaws.com/operations', operationData);

            alert('Form submitted and evaluated successfully!');
            navigate('/company-home', { state: { companyID: company } }); // <-- Go back to CompanyHome

        } catch (error) {
            console.error('Error submitting form:', error);
        }

    };

    return (
        <div className="formContainer">
            <h2>Mining Operations Questionnaire for {company}</h2>
            <form onSubmit={handleSubmit}>
                {/* Company Name Dropdown */}
                

                {/* First Question */}
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="What pollution control measures do you have in place?"
                    name="pollutionControl"
                    value={answers.pollutionControl}
                    onChange={handleInputChange}
                    className="formField"
                    variant="outlined"
                    placeholder="Describe your pollution control methods"
                    InputProps={{
                        startAdornment: <AutoAwesomeIcon sx={{ color: "green" }} />,
                    }}
                />

                {/* Second Question */}
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="How do you engage with local communities to ensure minimal impact on food sovereignty?"
                    name="communityEngagement"
                    value={answers.communityEngagement}
                    onChange={handleInputChange}
                    className="formField"
                    variant="outlined"
                    placeholder="Describe your community engagement practices"
                    InputProps={{
                        startAdornment: <AutoAwesomeIcon sx={{ color: "green" }} />,
                    }}
                />

                {/* Third Question */}
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="What percentage of water used in your operations is recycled?"
                    name="waterRecycling"
                    value={answers.waterRecycling}
                    onChange={handleInputChange}
                    className="formField"
                    variant="outlined"
                    placeholder="Enter percentage of recycled water"
                    InputProps={{
                        startAdornment: <AutoAwesomeIcon sx={{ color: "green" }} />,
                    }}
                />

                {/* Submit Button */}
                <Button type="submit" variant="contained" color="primary" fullWidth className="submitButton">
                    Submit
                </Button>
            </form>
        </div>
    );
}
