import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const authtoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbmlkIjoiODBjNTNlNjAtY2I0NC00YTRmLTg5YTgtN2RhYTMzMzI1ZjdmIiwidXNlcmlkIjoiZTE4MGYzZTktZDVjMC00NjkwLTg3ZTUtMjMzNmM2NjA2YWU4IiwiaWF0IjoxNzE3ODYxNzM4fQ.0qlxDsRHzV6-3KDWgK4Lwg1XRYjzL69f6jw0WkfgQVw";
export const eventApi = createApi({
  reducerPath: "eventApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (build) => ({
    createEvent: build.mutation<any, any>({
      query(event) {
        return {
          url: `event`,
          method: "POST",
          body: event,
          headers: {
            Authorization: `Bearer ${authtoken}`,
          },
        };
      },
    }),

    signUp: build.mutation<any, any>({
      query(user) {
        return {
          url: "auth/signup",
          method: "POST",
          body: user,
        };
      },
    }),

    signin: build.mutation<any, any>({
        query(user) {
          return {
            url: "auth/login",
            method: "POST",
            body: user,
          };
        },
      }),
  }),
});

export const { useCreateEventMutation, useSignUpMutation, useSigninMutation } = eventApi;
