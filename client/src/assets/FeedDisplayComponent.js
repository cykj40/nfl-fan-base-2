import React, { useState, useEffect } from 'react';

const FeedDisplayComponent = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch posts from the server
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default FeedDisplayComponent;
