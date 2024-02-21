export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case "CHANGE-APP-STATUS":
      return { ...state, status: action.status }
    case "CHANGE-APP-ERROR":
      return { ...state, error: action.error }
    default:
      return state
  }
}

type ActionsType =
  | ReturnType<typeof changeAppStatus>
  | ReturnType<typeof changeAppError>

export const changeAppStatus = (status: RequestStatusType) =>
  ({ type: 'CHANGE-APP-STATUS', status } as const)

export const changeAppError = (error: string | null) =>
  ({ type: 'CHANGE-APP-ERROR', error } as const)