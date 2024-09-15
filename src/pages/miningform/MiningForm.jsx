import React, { useState } from "react";
import { TextField, MenuItem, Button, Select, InputLabel, FormControl } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import "./miningform.css";

export default function MiningForm({company}) {

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

   

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can handle the form submission, e.g., send the data to the backend
        console.log("Form Submitted: ", { company, answers });
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
