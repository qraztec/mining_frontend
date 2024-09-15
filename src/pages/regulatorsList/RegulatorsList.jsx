import React from "react"
import "./regulatorsList.css"
import UserComment from "../../components/userComment/UserComment"
import Topbar from "../../components/topbar/Topbar"
import Summarizer from "../../components/summarizer/Summarizer"
export default function UserComments({ companies, areaName }) {
    return (
        <>
            <Topbar />
            <h2>List of Companies in {areaName}</h2>
            <div className="companiesSummary">
                {

                    companies.map((company) => {
                        return( <>
                        <div className="companySummary">
                            <h3 className="companyName">
                                {company}
                            </h3>
                            <Summarizer />
                            </div>
                        </>
                        )
                })
                }
            </div>
        </>
    )
}