import React from "react"
import Topbar from "../../components/topbar/Topbar"
import "./userHome2.css"


export default function UserHome2({ name, image }) {
    return (
        <>
            <Topbar />
            <div className="homePage2">
                <div className="areaName">
                    {name}
                </div>
                <div className="areaImage">
                        <img src={image}  className="imageTag"/>
                    
                    
                </div>
                <div className="companies">
                    <p>Companies currently working in Area:</p>
                    <p>Mining Co</p>
                </div>
            </div>
        </>
    )
}