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
  }),
})

// Экспортируем хуки для использования в компонентах
export const { useGetCharactersQuery } = charactersApi
