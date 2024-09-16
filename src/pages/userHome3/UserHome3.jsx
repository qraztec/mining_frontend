import React from "react"
import Topbar from "../../components/topbar/Topbar"
import "./userHome3.css"
import Comment from "../../components/comment/Comment"
import {useParams} from "react-router-dom"
import { Button } from "@mui/material"

export default function UserHome3({ companyName, stateName}) {

    const {name, company} = useParams()
    return (
        <>
            <Topbar />
            <div className="homePage3">
                <div className="companyName">
                    {company} in {name}
                </div>
                <div className="companyMetrics">
                       <h2 className="susSize">
                        Sustainability Overview:</h2>
                        <ul className="metricsList">
                        <li>Cutting many trees down (-)</li>
                        <li>Good mineral to rock ratio (+)</li>
                        <li>Operability Score: 6</li>
                        <li>Sentiment Score: 6</li>
                        </ul>
                </div>
                <div className="companyComment">
                    <Comment/>
                </div>
                <div className="submitBox">
                    <Button variant="contained">Submit</Button>
                </div>
            </div>
        </>
    )
}