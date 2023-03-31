import { actionTypes } from "../actionTypes/actionTypes"

const initialState = {
    posts: [],
    updatePost: [],
    isModalOpen: false,
    isLoading: false
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_POST:
            return {
                ...state,
                posts: action.payload,
            }
        case actionTypes.DELETE_POST:
            return {
                ...state,
                posts: action.payload
            }
        case actionTypes.UPDATE_POST:
            return {
                ...state,
                updatePost: action.payload
            }
        case actionTypes.OPEN_MODAL:
            return {
                ...state,
                isModalOpen: action.payload
            }
        case actionTypes.LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}