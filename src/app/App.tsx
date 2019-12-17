import React, { useEffect } from 'react';
import './App.css';
import { PostListPage } from '../features/postsList/PostListPage';
import { PostListItemPage }  from '../features/postsList/PostListItemPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { fetchPosts } from '../features/posts/postsSlice';
import { useDispatch } from 'react-redux';

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])


  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Switch>
            <Route path="/:id">
              <PostListItemPage />
            </Route>
            <Route path="/">
            <PostListPage />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
