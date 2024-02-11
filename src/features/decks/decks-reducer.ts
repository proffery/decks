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
    default:
      return state
  }
}

type DecksActions = SetDecksActionType

type SetDecksActionType = ReturnType<typeof setDecksAC>
export const setDecksAC = (decks: DeckType[]) => (
  { type: 'SET-DECKS', payload: { decks } } as const
) 