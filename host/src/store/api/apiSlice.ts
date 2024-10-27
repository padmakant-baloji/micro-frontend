import { baseApi } from '@/lib/api/baseApi';

export const apiSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    getPosts: builder.query<[], void>({
      query: () => '/',

      providesTags: result => (result ? result : []),
    }),
  }),
  overrideExisting: false,
});
