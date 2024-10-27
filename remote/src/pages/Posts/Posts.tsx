import { useGetPostsQuery } from '../../store/posts/postsSlice';
import { PostCard } from '../../components/PostCard/PostCard';
import styles from './Posts.module.scss';

export const Posts = () => {
  const { data: posts, isLoading, error } = useGetPostsQuery();

  if (isLoading) return <div className={styles.loading}>Loading posts...</div>;
  if (error) return <div className={styles.error}>Error loading posts!</div>;

  return (
    <div className={styles.posts}>
      <h2>Posts from JSONPlaceholder111</h2>
      <div className={styles.postsList}>
        {posts?.slice(0, 10).map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
