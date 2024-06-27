import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const serverUrl = process.env.NEXT_PUBLIC_SEVER_API;
// Define a service using a base URL and expected endpoints
export const ProductApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: serverUrl }),
  endpoints: (builder) => ({
    getProductsById: builder.query({
      query: (data) => ({
        url: `/api/v1/product/findManyById/${data}`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsByIdQuery } = ProductApi;
