import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { changeAppError, changeAppStatus } from '../../app/app-reducer.ts'
import { errorHandler } from '../../common/utils/handle-error.ts'
import { AxiosError } from 'axios'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  dispatch(changeAppStatus('loading'))
  try {
    const res = await decksAPI.fetchDecks()
    dispatch(setDecksAC(res.data.items))
    dispatch(changeAppStatus('succeeded'))
  } catch (error) {
    dispatch(changeAppStatus('failed'))
    errorHandler(error, dispatch)
  }
}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  dispatch(changeAppStatus('loading'))
  try {
    const res = await decksAPI.addDeck(name)
    dispatch(addDeckAC(res.data))
    dispatch(changeAppStatus('succeeded'))
  } catch (error) {
    dispatch(changeAppStatus('failed'))
    errorHandler(error, dispatch)
  }
}


export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
  dispatch(changeAppStatus('loading'))
  try {
    const res = await decksAPI.deleteDeck(id)
    dispatch(deleteDeckAC(res.data.id))
    dispatch(changeAppStatus('succeeded'))
  } catch (error) {
    dispatch(changeAppStatus('failed'))
    errorHandler(error, dispatch)
  }
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  dispatch(changeAppStatus('loading'))
  try {
    const res = await decksAPI.updateDeck(params)
    dispatch(updateDeckAC(res.data))
    dispatch(changeAppStatus('succeeded'))
  } catch (error) {
    dispatch(changeAppStatus('failed'))
    errorHandler(error, dispatch)
  }
}
