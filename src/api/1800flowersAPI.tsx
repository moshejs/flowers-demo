import axios from 'axios';

const postsUrl = 'api/v1/posts';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsResult { // ??
  posts: Post[]
}


export async function getPosts(): Promise<Post[]> {
  const { data } = await axios.get<Post[]>('http://jsonplaceholder.typicode.com/posts');
  return data;
}

