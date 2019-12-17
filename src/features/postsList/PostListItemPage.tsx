import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../app/rootReducer'

import { useHistory } from "react-router-dom";

import {
  useParams
} from "react-router-dom";
import { Post } from '../../api/1800flowersAPI'
import { updatePost, selectPost, filterPosts } from '../posts/postsSlice';


export const PostListItemPage = (props: any) => {
  const {id} = useParams();
  const dispatch = useDispatch()
  let history = useHistory();
  dispatch(selectPost({post: { id: id}}))

  const {
    postsList,
    isLoading,
    error: boolean,
    selectedPost // issuesError ??
  } = useSelector((state: RootState) => state.posts)

      // const saveUpdate = () => {
      //   if(selectedPost) dispatch(updatePost(selectedPost))
      // }

      const values = {
        title: '',
        body : ''
      } 

      const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(values)
        const newPost = Object.assign({},selectedPost);
        if(newPost !== null) {
          if (values.body.length) {
            newPost.body = values.body
          }
          if (values.title.length) {
            newPost.title = values.title
          }
          console.log(newPost)
          dispatch(updatePost(newPost))
          dispatch(filterPosts({ search : '' }))
          history.push("/");
        }
       
      }

      const handleChange = (f: string, event: any) => {
        if(f === 'body' || f === 'title') values[f] = event.target.value.toString()
      }

      return (
        <div id="issue-list-page">
            { selectedPost !== null ? 
            <div>
             <label>Id: </label>
              <span>{selectedPost.id}</span>
              <br />
              <label>UserId: </label>
              <span>{selectedPost.userId}</span>
              <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input type="textarea" defaultValue={selectedPost.title} onChange={(event) =>handleChange('title', event)} />
                <br />
                <label>Body: </label>
                <input type="textarea" defaultValue={selectedPost.body} onChange={(event) => handleChange('title', event)} />
                <br />
                <button type="submit">Save</button>  
              </form>
            </div>: 'error loading post'}
        </div>
      )
}