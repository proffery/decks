import { DeckType } from "./decks-api"

const initialState = {
  decks: [] as DeckType[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS':
      return { ...state, decks: action.payload.decks }
    case "ADD-DECK":
      return { ...state, decks: [action.payload.deck, ...state.decks] }
    default:
      return state
  }
}

type DecksActions = ReturnType<typeof setDecksAC> | ReturnType<typeof addDeckAC>

export const setDecksAC = (decks: DeckType[]) => (
  { type: 'SET-DECKS', payload: { decks } } as const
)

export const addDeckAC = (deck: DeckType) => (
  { type: 'ADD-DECK', payload: { deck } } as const
)