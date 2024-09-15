import React from "react"
import Topbar from "../../components/topbar/Topbar"
import "./companyCurrent.css"
import Summarizer from "../../components/summarizer/Summarizer"
import Button from "@mui/material/Button"
export default function CompanyCurrent({ areaName }) {
    return (
        <>
            <Topbar />
            <div className="homePage3">
                <div className="companyName">
                    {areaName}
                </div>
                <div className="companyMetrics">
                    <p>
                        <p>Sustainability Score (Overall Score): 7</p>
                        <p>Operability Score: 8</p>
                        <p>Sentiment Score: 6</p>
                    </p>
                </div>
                <div className="companyComment">
                    <Summarizer />
                    <div className="submitBox">
                        <Button variant="contained">Read comments</Button>
                    </div>
                </div>

            </div>
        </>
    )
}