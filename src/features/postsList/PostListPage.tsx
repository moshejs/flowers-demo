
import React from 'react'

import { useSelector } from 'react-redux'
import { RootState } from '../../app/rootReducer'
import { PostsList } from './PostsList'
import { PostSearch } from './PostSearch'

export const PostListPage = () => {

    const {
        filteredPosts,
        isLoading,
        error: boolean, // issuesError ??
      } = useSelector((state: RootState) => state.posts)

      

      let renderedList = isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <PostsList posts={filteredPosts} />
      )

      return (
        <div>
            <PostSearch />
          {renderedList}
        </div>
      )
    }
    