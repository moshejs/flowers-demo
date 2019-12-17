import { RootState } from "../../app/rootReducer"
import { useSelector, useDispatch } from "react-redux"
import React, { useEffect } from "react"
import { filterPosts } from '../posts/postsSlice'

export const PostSearch = () => {
    const dispatch = useDispatch()

    const {
        isLoading,
      } = useSelector((state: RootState) => state.posts)

    const filterResults = (e: any) => {dispatch(filterPosts({search: e}))}

      return (
        <div id="issue-list-page">
        {!isLoading ? <input onChange={e => filterResults(e.target.value)} placeholder="Search..." /> :
        <div></div>
        }
        </div>
      )
    }