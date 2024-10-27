export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

export type PostResponse = Post[];

export type PostDetailsResponse = Post;