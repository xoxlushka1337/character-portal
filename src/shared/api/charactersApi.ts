import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Character, CharactersData } from 'shared/model/type'

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api',
  }),

  endpoints: (builder) => ({
    getCharactersFilter: builder.query({
      query: (options) => {
        // Измените запрос, чтобы включить параметр страницы
        const queryString = Object.keys(options)
          .filter((key) => options[key] !== undefined && options[key] !== null)
          .map((key) => `${key}=${options[key]}`)
          .join('&')
        return `/character/?${queryString ? `${queryString}&` : ''}`
      },
    }),
    getAllCharacters: builder.query({
      query: () => `/character`,
      transformResponse: (response: CharactersData) => {
        const allResults = response.results

        if (response.info.next) {
          return getAllPages(response.info.next, allResults)
        }

        return allResults
      },
    }),
  }),
})

async function getAllPages(
  nextPageUrl: string,
  allResults: Character[],
): Promise<Character[]> {
  const nextPageResponse = await fetch(nextPageUrl)
  const nextPageData = await nextPageResponse.json()
  const combinedResults = allResults.concat(nextPageData.results)

  if (nextPageData.info.next) {
    return getAllPages(nextPageData.info.next, combinedResults)
  }
  return combinedResults
}

export const { useGetCharactersFilterQuery, useGetAllCharactersQuery } =
  charactersApi
