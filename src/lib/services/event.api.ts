import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const authtoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbmlkIjoiNzIwOTlmZDAtYjVjNS00NTlmLWJiODItYmNlNGRkYTAzZmFjIiwidXNlcmlkIjoiZWY4ZGQ4NDYtMTNmYi00NjMyLTk3MDktYmY4NWMyY2UwZDgxIiwiaWF0IjoxNzE3Njk5MjE5fQ.VFxCcWEfc2JTU3UhWDBEu5wkJhy8fO0KLtrrztTIG5M";
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
} = eventApi;
