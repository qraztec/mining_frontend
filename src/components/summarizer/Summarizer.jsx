import React from "react"
import "./summarizer.css"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
export default function Summarizer() {
    return (
        <>
            <div className="commentPage">
                
                <div className="commentBox">
                    <div className="commentBoxText">
                        <TextField
                            multiline
                            rows={6}
                            placeholder="AI Summary"
                            className="commentInput"
                            InputProps={{
                                readOnly: true,
                                sx: {
                                    borderRadius: "20px", // Apply the curvy border radius
                                    backgroundColor: "#f0f0f0", // Grey background
                                    "& fieldset": {
                                        border: "none", // Remove the border
                                    }
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
                {/* <div className="submitBox">
                    <Button variant="contained">Read comments</Button>
                </div> */}

            </div>

        </>
    )

}