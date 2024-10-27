import { baseApi } from '@/lib/api/baseApi';
import type { Post } from '@/types';

export const postsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getPosts: builder.query<Post[], void>({
      query: () => '/posts',
      transformResponse: (response: Post[]) =>
        response.map(post => ({
          ...post,
          title: post.title.charAt(0).toUpperCase() + post.title.slice(1),
        })),
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
              { type: 'Posts', id: 'LIST' },
            ]
          : [{ type: 'Posts', id: 'LIST' }],
    }),
    getPost: builder.query<Post, string>({
      query: id => `/posts/${id}`,
      transformResponse: (response: Post): Post => ({
        ...response,
        title: response.title.charAt(0).toUpperCase() + response.title.slice(1),
      }),
      providesTags: (_, __, id) => [{ type: 'Posts', id }],
    }),
  }),
  overrideExisting: false,
});
