import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '@/types/posts';
import styles from './PostCard.module.scss';

interface PostCardProps {
  readonly post: Post;
}

export const PostCard = memo(({ post }: PostCardProps) => (
  <Link to={`/remote/post/${post.id}`} className={styles.post}>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
  </Link>
));

PostCard.displayName = 'PostCard';