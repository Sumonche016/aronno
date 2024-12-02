import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const serverUrl = process.env.NEXT_PUBLIC_SEVER_API;
// Define a service using a base URL and expected endpoints
export const ProductApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: serverUrl }),
  tagTypes: ["Banner", "Orders"],

  endpoints: (builder) => ({
    getProductsById: builder.query({
      query: (data) => ({
        url: `/api/v1/product/findManyById/${data}`,
        method: "GET",
      }),
    }),
    getAllBanner: builder.query({
      query: () => ({
        url: `/banner`,
        method: "GET",
      }),
      providesTags: ["Banner"],
    }),

    addBanner: builder.mutation({
      query: (data) => ({
        url: `/banner/add`,
        method: "POST",
        body: { url: data },
      }),
      invalidatesTags: ["Banner"],
    }),
    deleteBanner: builder.mutation({
      query: (_id) => ({
        url: `/banner/delete/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Banner"],
    }),
    deleteOrder: builder.mutation({
      query: (orderId) => ({
        url: `/odder/delete/${orderId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Orders"],
    }),
    getAllProducts: builder.query({
      query: (params) => ({
        url: `/api/v1/product/findByProductCategory`,
        method: "GET",
        params: {
          category: params?.category || "",
          limit: params?.limit || 20,
          skip: 0,
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductsByIdQuery,
  useAddBannerMutation,
  useGetAllBannerQuery,
  useDeleteBannerMutation,
  useDeleteOrderMutation,
  useGetAllProductsQuery,
} = ProductApi;
