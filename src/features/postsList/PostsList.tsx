import React from 'react'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { Post } from '../../api/1800flowersAPI'
import {
  Link, useHistory
} from "react-router-dom";
interface Props {
  posts: Post[]
}

export const PostsList = ({ posts }: Props) => {
  let history = useHistory();

  const renderedPosts = posts.map(post => (
      <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => history.push(`/${post.id}`)} size="small" color="primary">
          More Info
        </Button>
      </CardActions>
    </Card>        
  ))

  return <ul>{renderedPosts}</ul>
}