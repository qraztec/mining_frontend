import React from "react"
import "./userComments.css"
import UserComment from "../../components/userComment/UserComment"
import Topbar from "../../components/topbar/Topbar"
export default function UserComments({ comments }) {
    return (
        <>
            <Topbar />
            <h2>User Comments</h2>
            <div>
                {
                    comments.map((comment) => {
                        return <UserComment comment={comment} />
                    })
                }
            </div>
        </>
    )
}