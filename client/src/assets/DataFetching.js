import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataFetching() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("")
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)

            })
    })

    return (
        <div>
            <ul>
                {posts.map(post => (<li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}
