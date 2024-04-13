import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_Key = "5a798083447bb106e6d69341d762aae4";
export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseURL: `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${API_Key}`,
  }),

  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => "/movies",
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: credentials,
      }),
    }),
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/users/register",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: userData,
      }),
    }),
    getAccountDetails: builder.query({
      query: (userToken) => ({
        url: "/users/me",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetAccountDetailsQuery,
} = apiSlice;
