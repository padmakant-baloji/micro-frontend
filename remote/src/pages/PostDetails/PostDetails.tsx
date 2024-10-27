import { useParams, Link } from 'react-router-dom';
import { useGetPostQuery } from '../../store/posts/postsSlice';
import styles from './PostDetails.module.scss';

export const PostDetails = () => {
  // Specify that id is a string
  const { id } = useParams<{ id: string }>();
  // Call the API query using the id
  const { data: post, isLoading } = useGetPostQuery(id!); // Using non-null assertion operator

  // Show loading state while fetching data
  if (isLoading) return <div>Loading post details...</div>;

  // Handle case where id is undefined
  if (!id) return <div>Error: Post ID is missing.</div>;

  return (
    <div className={styles.postDetails}>
      <h2>{post?.title}</h2>
      <div className={styles.content}>
        <p>{post?.body}</p>
      </div>
      <Link to="/remote" className={styles.backButton}>
        Back to Posts
      </Link>
    </div>
  );
};
