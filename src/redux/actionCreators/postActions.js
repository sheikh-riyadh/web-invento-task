import { actionTypes } from "../actionTypes/actionTypes"

export const loading = (isLoading) => {
    return {
        type: actionTypes.LOADING,
        payload: isLoading
    }
}


export const openModal = (isOpen) => {
    return {
        type: actionTypes.OPEN_MODAL,
        payload: isOpen,
    }
}


export const updatePost = (restPost) => {
    return {
        type: actionTypes.UPDATE_POST,
        payload: restPost,
    }
}