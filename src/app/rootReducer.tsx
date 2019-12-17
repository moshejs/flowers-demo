import { combineReducers } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice'
// import visibilityFilterReducer from 'features/filters/filtersSlice'

const rootReducer = combineReducers({
    posts: postsReducer,
    //visibilityFilter: visibilityFilterReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
