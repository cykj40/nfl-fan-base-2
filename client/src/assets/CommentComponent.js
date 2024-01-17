import React from 'react';

const CommentComponent = ({ comment }) => {
    const { text, author } = comment;

    return (
        <div>
            <p>{text}</p>
            <p>Author: {author}</p>
        </div>
    );
};

export default CommentComponent;
