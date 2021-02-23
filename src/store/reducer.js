import * as actionTypes from './actionTypes'

const initialState = {
    todos: [],
    loading: false,
    currentTodoId:null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.GET_TODOS_START):
            return {
                ...state,
                loading: true
            }
        case (actionTypes.GET_TODOS_SUCCESS):
            return {
                ...state,
                loading: false,
                todos: action.data
            }
        case (actionTypes.GET_TODOS_FAIL):
            return {
                ...state,
                loading: false
            }
        case (actionTypes.ADD_TODO_START):
            return {
                ...state,
                loading: true
            }
        case (actionTypes.ADD_TODO_SUCCESS):
            return {
                ...state,
                loading: false,
                todos: [...state.todos, action.data]
            }
        case (actionTypes.ADD_TODO_FAIL):
            return {
                ...state,
                loading: false
            }
        case (actionTypes.EDIT_TODO_START):
            return {
                ...state,
                loading: true
            }
        case (actionTypes.EDIT_TODO_SUCCESS):
            return {
                ...state,
                loading: false,
            }
        case (actionTypes.EDIT_TODO_FAIL):
            return {
                ...state,
                loading: false
            }
        case (actionTypes.DELETE_TODO_START):
            return {
                ...state,
                loading: true
            }
        case (actionTypes.DELETE_TODO_SUCCESS):
            return {
                ...state,
                loading: false,
            }
        case (actionTypes.DELETE_TODO_FAIL):
            return {
                ...state,
                loading: false
            }
        case (actionTypes.SET_CURRENT_TODO_ID):
            return {
                ...state,
                currentTodoId: action.data
            }
        default:
            return state
    }
}

export default reducer 