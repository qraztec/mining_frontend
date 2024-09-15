import React from "react"
import "./userComment.css"
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"
import TextField from "@mui/material/TextField"


export default function UserComment({ comment }) {
    return (
        <>
            <div className="commentBox">
                <div className="commentBoxText">
                    <TextField
                        multiline
                        rows={3}
                        value={comment}
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
                        <AutoAwesomeIcon sx={{ color: "darkblue" }} />
                    </span>
                </div>
            </div>
        </>
    )
}