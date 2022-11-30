import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataFetching() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("http://reliantstats.com/api/v1/team-info/NFL?RSC_token=ebde7dc4f5104a36&team_id=")
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)

            })
    })

    return (
        <div>
            <h1>
                Test:
                {posts && posts.data.NFL.map((post) => (
                    <p key={post.team}>{post.team}</p>
                ))}               
            </h1>
        </div>
    )
}
