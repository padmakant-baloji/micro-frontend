import { useGetPostsQuery } from '@/store/posts/postsSlice';

export const usePosts = () => {
  const { data: posts, isLoading, error } = useGetPostsQuery();

  return {
    posts: posts?.slice(0, 10),
    isLoading,
    error,
  };
};
