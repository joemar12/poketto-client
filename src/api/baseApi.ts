import { RootState } from "./../store";
import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: `${process.env.API_URL}/graphql`,
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
