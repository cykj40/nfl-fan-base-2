import React, { useState, useEffect } from 'react';

const UserProfile = () => {
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [isFollowing, setIsFollowing] = useState(false);

    useEffect(() => {
        // Fetch user data from an API or database
        // and update the state
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/user');
                const userData = await response.json();
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        // Fetch user posts from an API or database
        // and update the state
        const fetchUserPosts = async () => {
            try {
                const response = await fetch('/api/posts');
                const userPosts = await response.json();
                setPosts(userPosts);
            } catch (error) {
                console.error('Error fetching user posts:', error);
            }
        };

        // Fetch user comments from an API or database
        // and update the state
        const fetchUserComments = async () => {
            try {
                const response = await fetch('/api/comments');
                const userComments = await response.json();
                setComments(userComments);
            } catch (error) {
                console.error('Error fetching user comments:', error);
            }
        };

        fetchUserData();
        fetchUserPosts();
        fetchUserComments();
    }, []);

    const handleFollowToggle = () => {
        // Implement follow/unfollow logic here
        setIsFollowing(!isFollowing);
    };

    return (
        <div>
            <h2>{user.name}</h2>
            <img src={user.profilePicture} alt="Profile Picture" />
            <p>{user.bio}</p>

            <h3>Posts</h3>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>

            <h3>Comments</h3>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>{comment.text}</li>
                ))}
            </ul>

            <button onClick={handleFollowToggle}>
                {isFollowing ? 'Unfollow' : 'Follow'}
            </button>
        </div>
    );
};

export default UserProfile;
