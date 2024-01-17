import React from 'react';
import { Link } from 'react-router-dom';

const FollowListComponent = ({ currentUser, followingList }) => {
    return (
        <div>
            <h2>Following List</h2>
            <ul>
                {followingList.map((user) => (
                    <li key={user.id}>
                        <Link to={`/profile/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FollowListComponent;
