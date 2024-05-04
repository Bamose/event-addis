 import { API_URL } from '@/lib/api/config'; 
import { eventtypes, membertypes} from '@/types/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from './Store';
import { UserApiResponse } from '@/components/users/users';
import { HYDRATE } from "next-redux-wrapper";
import { Action, PayloadAction } from '@reduxjs/toolkit';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbmlkIjo1LCJ1c2VySWQiOjQsInJvbGUiOiJ1c2VyIn0.bbvaWnKFHFjLmh6YkdvhIuzA0VrHboytkC9mFFZhTSM"


export const Eventapi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),

  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [ "posts"],
endpoints: (builder) => ({  
  Getmembers: builder.query<any, void>({
    query: () => ({  
      url: 'members',
    method: 'Get',
    headers: {
      Authorization: `Bearer ${token}`
    },
   
  }),

     providesTags:['posts']
   
  }),
  
  }),
 

 

});

export const {
  useGetmembersQuery,
  util: { getRunningQueriesThunk },
   } = Eventapi;

export const {Getmembers} = Eventapi.endpoints;