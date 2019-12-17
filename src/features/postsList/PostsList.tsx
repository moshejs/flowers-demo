import React from 'react'

import { Post } from '../../api/1800flowersAPI'
import {
  Link
} from "react-router-dom";
interface Props {
  posts: Post[]
}

export const PostsList = ({ posts }: Props) => {
  const renderedPosts = posts.map(post => (
    <li key={post.id}>
        <p>{post.title}</p>
        <Link to={`/${post.id}`}>More Info</Link>

    </li>
  ))

  return <ul>{renderedPosts}</ul>
}