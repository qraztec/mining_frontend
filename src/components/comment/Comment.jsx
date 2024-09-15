import React from "react"
import "./comment.css"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
export default function Comment() {
    return (
        <>
            <div className="commentPage">
                <div className="commentText">
                    <p>
                        Enter comment:
                    </p>
                </div>
                <div className="commentBox">
                    <div className="commentBoxText">
                        <TextField
                            multiline
                            rows={6}
                            placeholder="Comment"
                            className="commentInput"
                        />
                    </div>
                    <div className="commentBoxAI">
                        <span className="aiConsultant">AI Constulant
                            <AutoAwesomeIcon sx={{color: "darkblue"}}/>
                        </span>
                    </div>
                </div>
                <div className="submitBox">
                    <Button variant="contained">Submit</Button>
                </div>

            </div>

        </>
    )

}