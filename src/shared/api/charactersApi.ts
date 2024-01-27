import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Создаем API с базовым запросом fetchBaseQuery

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api',
  }),

  // Определяем точку конечную для запроса данных
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: () => `/character`,
    }),
    getCharactersName: builder.query({
      query: (name) => `/character/?name=${name}`,
    }),
    getCharactersFilter: builder.query({
      query: (options) => {
        const queryString = Object.keys(options)
          .filter((key) => options[key] !== undefined && options[key] !== null)
          .map((key) => `${key}=${options[key]}`)
          .join('&')
        return `/character/?${queryString ? `${queryString}&` : ''}page=2`
      },
    }),
  }),
})

// Экспортируем хуки для использования в компонентах
export const {
  useGetCharactersQuery,
  useGetCharactersNameQuery,
  useGetCharactersFilterQuery,
} = charactersApi
