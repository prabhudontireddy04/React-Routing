import React from 'react'
import {useParams} from 'react-router-dom';
const Post = () => {
    const {postID}=useParams();
  return (
    <h1>Viewing Post: {postID}</h1>
  )
}

export default Post;
