import { createAction } from '@reduxjs/toolkit'
// export const GET_ERRORS = "GET_ERRORS";

export const FETCH_POSTS = createAction('FETCH_POSTS');
export const FETCH_POSTS_PENDING = createAction('FETCH_POSTS_PENDING');
export const FETCH_POSTS_SUCCESS = createAction('FETCH_POSTS_SUCCESS');
export const FETCH_POSTS_ERROR = createAction('FETCH_POSTS_ERROR');

// export const POSTS_FILTERING = createAction('POSTS_FILTERING'
// export const POSTS_FILTERED = createAction('POSTS_FILTERED'

// export const EDIT_POST = createAction('EDIT_POST';
// export const UPDATE_POST = createAction('UPDATE_POST';