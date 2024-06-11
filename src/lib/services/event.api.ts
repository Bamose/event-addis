import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const authtoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbmlkIjoiZmFjOTZjZjUtZGU0ZC00Y2ExLThmNGUtMzE4YTNiYzdlZjUxIiwidXNlcmlkIjoiYTQwYWE5YWYtOWExMC00MTVhLWJlMGUtNjI2NTRkZWQwMzMwIiwiaWF0IjoxNzE4MDUyNzkyfQ.3gU8LA71vo0G4mQStuci2lCEWMFvJ2wmHJlLmKZB0W0";
export const eventApi = createApi({
  reducerPath: "eventApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (build) => ({

    createEvent: build.mutation<any, any>({
      query(event) {
        return {
          url: "event",
          method: "POST",
          body: event,
          headers: {
            Authorization: `Bearer ${authtoken}`,
          },
        };
      },
    }),

    createTicket: build.mutation<any, any>({
      query(ticket) {
        return {
          url: "ticket",
          method: "POST",
          body: ticket,
          headers: {
            Authorization: `Bearer ${authtoken}`,
          },
        };
      },
    }),

    createRegister: build.mutation<any, any>({
      query(register) {
        return {
          url: "register",
          method: "POST",
          body: register,
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

export const {
  useCreateEventMutation,
  useSignUpMutation,
  useSigninMutation,
  useCreateTicketMutation,
  useCreateRegisterMutation,
} = eventApi;
