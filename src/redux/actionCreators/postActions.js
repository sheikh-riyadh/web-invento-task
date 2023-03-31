import { actionTypes } from "../actionTypes/actionTypes"

export const loading = (isLoading) => {
    return {
        type: actionTypes.LOADING,
        payload: isLoading
    }
}