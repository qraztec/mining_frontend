import React from "react"
import "./comment.css"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
export default function Comment() {
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
                            <AutoAwesomeIcon sx={{color: "darkblue"}}/>
                        </span>
                    </div>
                </div>
                

            </div>

        </>
    )

}