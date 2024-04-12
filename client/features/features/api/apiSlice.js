import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    const fetch = require('node-fetch');

    const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer 5a798083447bb106e6d69341d762aae4'
      }
    };
    
    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));}),

  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => "/?i=",
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
