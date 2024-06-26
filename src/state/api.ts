import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IKPI, IProductResponse, ITransactionResponse } from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions"],
  endpoints: (build) => ({
    getKpis: build.query<IKPI[], void>({
      query: () => "kpi/kpis",
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<IProductResponse[], void>({
      query: () => "product/products",
      providesTags: ["Products"],
    }),
    getTransactions: build.query<ITransactionResponse[], void>({
      query: () => "transaction/transactions",
      providesTags: ["Transactions"],
    }),
  }),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
  api;
