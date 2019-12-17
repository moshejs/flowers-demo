import { RootState } from "../../app/rootReducer"
import { useSelector, useDispatch } from "react-redux"
import React from "react"
import { filterPosts } from '../posts/postsSlice'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export const PostSearch = () => {
    const dispatch = useDispatch()

    const {
        isLoading,
        postsList,
        filteredPosts
      } = useSelector((state: RootState) => state.posts)

    const filterResults = (e: any) => {dispatch(filterPosts({search: e}))}

      return (
        <div>
        {!isLoading ?  
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
          <input onChange={e => filterResults(e.target.value)} placeholder="Search..." />
          </Typography>
          <Typography variant="h6">
            <span>Showing {filteredPosts.length} of {postsList.length} results</span>
          </Typography>

        </Toolbar>
      </AppBar>
        
        :
        <div></div>
        }
        </div>
      )
    }