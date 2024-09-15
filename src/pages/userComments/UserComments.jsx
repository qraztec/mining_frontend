import React from "react"
import "./userComments.css"
import UserComment from "../../components/userComment/UserComment"
import Topbar from "../../components/topbar/Topbar"
import SentimentAnalysis from "../../components/sentiment/SentimentAnalysis"
export default function UserComments({ comments }) {
    return (
        <>
            <Topbar />
            <h2>User Comments</h2>
            <div>
                {
                    comments.map((comment) => {
                        return (
                            <>
                                <div className="fullSentiment">
                                <UserComment comment={comment} />
                                <SentimentAnalysis text={comment}/>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}