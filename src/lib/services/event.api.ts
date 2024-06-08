
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const eventApi = createApi({
  reducerPath: 'eventApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  endpoints: (build) => ({
    createEvent: build.mutation<any, string>({
      query({event}:any) {
        return{
            url: `posts`,
            method: 'POST',
            body: event,
        }
      },
    }),
  }),
})

export const { useCreateEventMutation } = eventApi