import { AxiosError } from "axios";
import { Dispatch } from "redux";
import { changeAppError } from "../../app/app-reducer";

export const errorHandler = (error: AxiosError | Error | unknown, dispatch: Dispatch) => {
    let errorMessage: string = ''
    if (error instanceof AxiosError) {
        error.response
            ? errorMessage = error.response.data.errorMessages[0].message
            : errorMessage = error.message
    } else {
        if (error instanceof Error) errorMessage = error.message
    }
    dispatch(changeAppError(errorMessage))
}