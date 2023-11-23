 import { API_URL } from '@/lib/api/config'; 
import { eventtypes, membertypes} from '@/types/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from './Store';


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbmlkIjo1LCJ1c2VySWQiOjQsInJvbGUiOiJ1c2VyIn0.bbvaWnKFHFjLmh6YkdvhIuzA0VrHboytkC9mFFZhTSM"
export const Eventapi = createApi({
  reducerPath: 'eventapi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: [ "posts"],
endpoints: (builder) => ({  
  Getmembers: builder.query<membertypes[], void>({
    query: () => ({  
      url: 'members',
    method: 'Get',
    headers: {
      Authorization: `Bearer ${token}`
    },
   
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
  useGetmembersQuery,
   } = Eventapi;