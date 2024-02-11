import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export type DeckType = {
  author: {
    id: string
    name: string
  },
  id: string
  userId: string
  name: string
  isPrivate: true,
  cover: string
  created: string
  updated: string
  cardsCount: number
}

type GetDecksResponseType = {
  items: DeckType[],
  pagination: {
    currentPage: number
    itemsPerPage: number
    totalPages: number
    totalItems: number
  },
  maxCardsCount: number
}

export const decksAPI = {
  fetchDecks() {
    return instance.get<GetDecksResponseType>('/v2/decks')
  }
}