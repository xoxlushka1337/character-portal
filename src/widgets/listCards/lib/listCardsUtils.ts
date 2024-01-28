// listCardsUtils.ts
import { useState } from 'react'
import { useGetCharactersFilterQuery } from 'shared/api/charactersApi'
import { CharactersData } from 'shared/model/type'

export const useCharactersData = (filters: any, currentPage: number) => {
  const {
    data: charactersDataFilter,
    error,
    isLoading,
    refetch,
  } = useGetCharactersFilterQuery({ ...filters, page: currentPage }) as {
    data: CharactersData
    error?: any
    isLoading: boolean
    refetch: () => void
  }

  return { charactersDataFilter, error, isLoading, refetch }
}

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  return { currentPage, handleNextPage, handlePreviousPage }
}
