import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const authtoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbmlkIjoiMzg4NjBhOGQtNTE5MC00NWI0LWI3Y2UtOTZlNzljZmJiY2EzIiwidXNlcmlkIjoiNjE2ZjI0NzEtNGMwZC00NzA2LTg0YjgtMDM1NjRjYmVjZGMyIiwiaWF0IjoxNzE4MTY5MjgxfQ.6LPXobDWmU5Q_X8Gxi-2lqGg2Mu4QT0pDicTmGpUiZk";
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
