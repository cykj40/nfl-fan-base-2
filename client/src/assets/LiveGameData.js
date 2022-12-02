import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function LiveGameData() {
    const [liveData, setLiveData] = useState([])

    useEffect(() => {
        axios.get("http://reliantstats.com/api/v1/live/2022-11-07/NFL?RSC_token=ebde7dc4f5104a36&team_id=")
        
            .then(res => {
                console.log(res)
                setLiveData(res.data)
            })
            .catch(err => {
                console.log(err)

            }) 
    })

    return (
        <div>
            <h1>
                Test:
                {liveData && liveData.data.NFL.map((liveData) => (
                    <p key={liveData.away_team.score}>{liveData.away_team.score}</p>
                ))}               
            </h1>
        </div>
    )
}

