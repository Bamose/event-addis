/* import { API_URL } from '@/lib/api/config'; */
import { eventtypes} from '@/types/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from './Store';



export const Gabapi = createApi({
  reducerPath: 'gabapi',
  baseQuery: fetchBaseQuery({ baseUrl:/* API_URL */'' }),
  tagTypes: [ "posts"],
endpoints: (builder) => ({
  GetGab: builder.query<eventtypes[], void>({
    query: () => ({  
      url: 'admin/gab',
    method: 'Get',
 
   
  }),
 /*  providesTags: (result) =>
      result
        ? [
            ...result.map(({ id }) => ({ type: 'posts' as const, id })),
            { type: 'posts', id: 'LIST' },
          ]
        : [{ type: 'posts', id: 'LIST' }], */
     
   
  }),
  //all users

 /*  Getusers: builder.query<usertypes[], void>({
    query: () => ({  
      url: 'admin/user/allusers',
    method: 'Get',
 
   
  }), */
 /*  providesTags: (result) =>
      result
        ? [
            ...result.map(({ id }) => ({ type: 'posts' as const, id })),
            { type: 'posts', id: 'LIST' },
          ]
        : [{ type: 'posts', id: 'LIST' }], */
     
   
  }),
 

 

});

export const {
  useGetGabQuery,
   } = Gabapi;