import React, { useState, useEffect } from "react";
import Topbar from "../../components/topbar/Topbar";
import "./userHome3.css";
import Comment from "../../components/comment/Comment";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";

export default function UserHome3() {
    const { name, company } = useParams();  // `name` is the area, `company` is the company name

    // State to store operation data
    const [operationData, setOperationData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch operation data from the backend on component mount
    useEffect(() => {
        const fetchOperationData = async () => {
            try {
                const response = await axios.get(`http://localhost:6565/operations/${company}/${name}`);
                setOperationData(response.data);  // Store the response data in state
                setLoading(false);
            } catch (err) {
                setError('Error fetching operation data');
                setLoading(false);
            }
        };
        
        fetchOperationData();
    }, [company, name]);  // Dependencies: runs when company or name changes

    // Show loading spinner while fetching
    if (loading) {
        return <div>Loading...</div>;
    }

    // Show error message if there's an error
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <Topbar />
            <div className="homePage3">
                <div className="companyName">
                    {company} in {name}
                </div>
                <div className="companyMetrics">
                    <h2 className="susSize">Sustainability Overview:</h2>
                    {operationData ? (
                        <ul className="metricsList">
                            <li>Operability Score: {operationData.operability_score}</li>
                            <li>Sentiment Score: {operationData.sentiment_score}</li>
                            <li>Sustainability Score: {operationData.sustainability_score}</li>
                        </ul>
                    ) : (
                        <p>No operation data available for this company in this area.</p>
                    )}
                </div>
                <div className="companyComment">
                    <Comment area={name} companyID={company} />
                </div>
                
            </div>
        </>
    );
}
