import { RootState } from "./../store";
import { createApi } from "@reduxjs/toolkit/query/react";
//Needed to copy the code from the main github repo due to type mismatch between
//graphqlRequestBaseQuery's expected GraphQLClient and the one exported by from graphql-request
import { graphqlRequestBaseQuery } from "../lib/rtk-query-graphql-request-base-query";
// import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient("", { headers: {} });

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    client,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
