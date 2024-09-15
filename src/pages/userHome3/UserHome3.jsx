import React from "react"
import Topbar from "../../components/topbar/Topbar"
import "./userHome3.css"
import Comment from "../../components/comment/Comment"


export default function UserHome2({ companyName, stateName}) {
    return (
        <>
            <Topbar />
            <div className="homePage3">
                <div className="companyName">
                    {companyName} in {stateName}
                </div>
                <div className="companyMetrics">
                       <p>
                        Operability Categories:
                        <p>1. Cutting many trees down (-)</p>
                        <p>2. Good mineral to rock ratio (+)</p>
                        <p>Operability Score: 6</p>
                        <p>Sentiment Score: 6</p>
                       </p>
                </div>
                <div className="companyComment">
                    <Comment/>
                </div>
            </div>
        </>
    )
}