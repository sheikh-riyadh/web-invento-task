import { actionTypes } from "../actionTypes/actionTypes"

export const loading = (isSpinnerLoading) => {
    return {
        type: actionTypes.LOADING,
        payload: isSpinnerLoading
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


export const getPost = (posts) => {
    return {
        type: actionTypes.GET_POST,
        payload: posts
    }
}



export const deletePost = (restPost) => {
    return {
        type: actionTypes.DELETE_POST,
        payload: restPost
    }
}