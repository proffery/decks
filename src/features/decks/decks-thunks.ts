import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { changeAppError, changeAppStatus } from '../../app/app-reducer.ts'
import { AxiosError } from 'axios'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  dispatch(changeAppStatus('loading'))
  try {
    const decs = await decksAPI.fetchDecks()
    dispatch(setDecksAC(decs.data.items))
    dispatch(changeAppStatus('succeeded'))
  } catch (error) {
    dispatch(changeAppStatus('failed'))
    dispatch(changeAppError('some Error'))
  }
}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  return decksAPI.addDeck(name).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
  return decksAPI.deleteDeck(id).then((res) => {
    dispatch(deleteDeckAC(res.data.id))
  })
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  dispatch(changeAppStatus('loading'))
  try {
    const res = await decksAPI.updateDeck(params)
    dispatch(updateDeckAC(res.data))
  } catch (error) {
    dispatch(changeAppStatus('failed'))
    dispatch(changeAppError('some Error'))
    let errorMessage: string = ''
    if (error instanceof AxiosError) {
      if (error.response) errorMessage = error.response?.data.errorMessages[0].message
      else errorMessage = error.message
    } else {
      if (error instanceof Error) errorMessage = error.message
    }
    console.log(errorMessage);
  } 
}
