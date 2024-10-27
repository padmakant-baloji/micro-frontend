import { Post } from '@/types/posts';

export const transformPostResponse = (post: Post): Post => ({
  ...post,
  title: post.title.charAt(0).toUpperCase() + post.title.slice(1),
});