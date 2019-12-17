import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Post, getPosts, PostsResult } from "../../api/1800flowersAPI";

import { AppThunk } from '../../app/store'


interface PostsState {
    postsList: Post[]
    filteredPosts: Post[]
    isLoading: boolean
    error: string | null
    selectedPost: Post | null
}

const postsInitialState: PostsState = {
    postsList: [],
    filteredPosts: [],
    isLoading: false,
    error: null,
    selectedPost: null
}

function startLoading(state: PostsState) {
    state.isLoading = true
}
  
function loadingFailed(state: PostsState, action: PayloadAction<string>) {
    state.isLoading = false
    state.error = action.payload
}

const posts = createSlice({
    name: 'posts',
    initialState: postsInitialState,
    reducers: {
      getPostsStart: startLoading,
      getPostsSuccess(state, { payload }: PayloadAction<PostsResult>) {
        const { posts }  = payload
        state.postsList = posts
        state.filteredPosts = posts
        state.isLoading = false
        state.error = null
      },
      getPostsFailure: loadingFailed,
      filterPosts(state, {payload}) {
          const { search } = payload
          if (!search.length) {
            state.filteredPosts = state.postsList
          } else {
            state.filteredPosts = state.postsList.filter(post => post.title.includes(search))
          }
      },
      selectPost(state, {payload}) {
        const { post: {id} } = payload
        const findPost = state.postsList.find((post: Post) => post.id === Number(id));
        if(findPost !== undefined) state.selectedPost = findPost
      },
      updatePost(state, { payload }: PayloadAction<Post>) {
        const post = state.postsList.filter(post => post.id === payload.id);
        post[0].title = payload.title
        post[0].body = payload.body
        // TODO: allow admins to change postID/userID
      },
    }
})

export const {
    getPostsStart,
    getPostsSuccess,
    getPostsFailure,
    updatePost,
    selectPost,
    filterPosts
} = posts.actions

export default posts.reducer

export const fetchPosts = (): AppThunk => async dispatch => {
    try {
      dispatch(getPostsStart())
      const posts = await getPosts()
      dispatch(getPostsSuccess({ posts: posts }))
    } catch (err) {
      dispatch(getPostsFailure(err))
    }
}