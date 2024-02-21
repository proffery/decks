import { AppRootState } from '../../app/store.ts'

export const selectDecks = (state: AppRootState) => state.decks.decks
export const selectAppStatus = (state: AppRootState) => state.app.status

