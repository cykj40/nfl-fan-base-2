import React from 'react'

import PostComponent from '../assets/PostComponent'
import CommentComponent from '../assets/CommentComponent'
import FeedDisplayComponent from '../assets/FeedDisplayComponent'
import FollowListComponent from '../assets/FollowListComponent'
import UserProfile from '../assets/UserProfile'


export default function BlogComponent() {
  return (
    <div>
      <h1>Blog Component</h1>
      <PostComponent />
      <CommentComponent />
      <FeedDisplayComponent />
      <FollowListComponent />
      <UserProfile />
      
      
    </div>
  )
}
