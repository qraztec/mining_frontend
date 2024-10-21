import React, { useState } from "react";
import "./comment.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import axios from "axios";

export default function Comment({ area, companyID }) {
    const [commentText, setCommentText] = useState("");  // State to hold the comment

    // Function to handle the comment submission
    const handleSubmit = async () => {
        const feedbackData = {
            commentText: commentText,
            area: area,  // Area provided from parent component
            companyID: companyID  // companyID provided from parent component
        };
        console.log(feedbackData)
        
        try {
            // Post the comment to the feedback endpoint
            const response = await axios.post('https://nppk1se46l.execute-api.us-west-2.amazonaws.com/feedback', feedbackData);
            console.log('Feedback submitted successfully', response.data);
            alert("Comment submitted successfully!");

            // Clear the comment after submission
            setCommentText("");
        } catch (error) {
            console.error('Error submitting feedback:', error);
            alert("Error submitting feedback, please try again.");
        }
    };

    return (
        <>
            <div className="commentPage">
                <div className="commentBox">
                    <div className="commentBoxText">
                        <TextField
                            multiline
                            rows={6}
                            placeholder="Enter a comment to the Company. Use employee1@company.com to contact an employee directly"
                            className="commentInput"
                            value={commentText}  // Bind the state to the input field
                            onChange={(e) => setCommentText(e.target.value)}  // Update state when text changes
                            InputProps={{
                                sx: {
                                    borderRadius: "10px", // Add a rounded border
                                    backgroundColor: "#f5f5f5", // Light grey background
                                    "& fieldset": {
                                        border: "none", // Remove the black border
                                    },
                                    "&:hover fieldset": {
                                        border: "none", // No border on hover
                                    },
                                    "&:focus fieldset": {
                                        border: "none", // No border on focus
                                    },
                                }
                            }}
                        />
                    </div>
                    <div className="commentBoxAI">
                        <span className="aiConsultant">AI Consultant
                            <AutoAwesomeIcon sx={{ color: "darkblue" }} />
                        </span>
                    </div>
                </div>
                
                <div className="submitButtonContainer">
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>
            </div>
        </>
    );
}
