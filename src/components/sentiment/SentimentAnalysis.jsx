import {useState, useEffect} from "react"
import React, {Component} from 'react';
import Sentiment from 'sentiment';
import "./sentimentanalysis.css"
const sentiment = new Sentiment();


export default function SentimentAnalysis({text}) {
    const [sentimentScore, setSentimentScore] = useState(null)
    


    useEffect(() => {
        if (text) {
            const result = sentiment.analyze(text)
            setSentimentScore(result.score)
        }
    })

    

        return (
            <div className = "sentimentResult">
                <h2>Sentiment Score</h2>
                <p>Sentiment Score: {sentimentScore != null ? sentimentScore: 'No text provided'}</p>
            </div>
        )
    
}