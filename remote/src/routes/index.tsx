import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { ROUTES } from '@/config/constants';

const Posts = lazy(() => import('@/pages/Posts').then(m => ({ default: m.Posts })));
const PostDetails = lazy(() => import('@/pages/PostDetails').then(m => ({ default: m.PostDetails })));

export const routes: RouteObject[] = [
  {
    path: ROUTES.POSTS,
    element: <Posts />,
  },
  {
    path: ROUTES.POST_DETAILS,
    element: <PostDetails />,
  },
];

export default routes;