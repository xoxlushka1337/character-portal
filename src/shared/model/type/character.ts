export type Origin = {
  name: string
  url: string
}

export type Location = {
  name: string
  url: string
}

export type Episode = string[]

export type Character = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: Episode
  url: string
  created: string
}

export type Info = {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export type CharactersData = {
  info: Info
  results: Character[]
}
