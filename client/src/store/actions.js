import * as actionTypes from "./actionTypes"
import axios from 'axios'

export const getTodosStart = () => {
    return {
        type: actionTypes.GET_TODOS_START
    }
}


export const getTodosSuccess = (data) => {
    return {
        type: actionTypes.GET_TODOS_SUCCESS,
        data: data
    }
}

export const getTodosFail = () => {
    return {
        type: actionTypes.GET_TODOS_FAIL
    }
}

export const getTodos = (data) => {
    return async dispatch => {
        dispatch(getTodosStart());
        try {
            const response = await axios.get('https://obscure-springs-40457.herokuapp.com/getTodos', data)
            dispatch(getTodosSuccess(response.data.data));
        } catch (error) {
            dispatch(getTodosFail())
            console.log(error.message)
        }
    }
}

export const addTodoStart = () => {
    return {
        type: actionTypes.ADD_TODO_START
    }
}


export const addTodoSuccess = (data) => {
    return {
        type: actionTypes.ADD_TODO_SUCCESS,
        data: data
    }
}

export const addTodoFail = () => {
    return {
        type: actionTypes.ADD_TODO_FAIL
    }
}

export const addTodo = (data) => {
    return async dispatch => {
        dispatch(addTodoStart());
        try {
            const response = await axios.post('https://obscure-springs-40457.herokuapp.com/addTodo', data)
            dispatch(addTodoSuccess(response.data.data));
        } catch (error) {
            dispatch(addTodoFail())
            console.log(error.message)
        }
    }
}

export const editTodoStart = () => {
    return {
        type: actionTypes.EDIT_TODO_START
    }
}


export const editTodoSuccess = (data) => {
    return {
        type: actionTypes.EDIT_TODO_SUCCESS,
        data: data
    }
}

export const editTodoFail = () => {
    return {
        type: actionTypes.EDIT_TODO_FAIL
    }
}

export const editTodo = (data) => {
    return async dispatch => {
        dispatch(editTodoStart());
        try {
            const response = await axios.put(`https://obscure-springs-40457.herokuapp.com/editTodo/${data._id}`, data)
            dispatch(editTodoSuccess(response.data.data));
            dispatch(getTodos())
        } catch (error) {
            dispatch(editTodoFail())
            console.log(error.message)
        }
    }
}

export const deleteTodoStart = () => {
    return {
        type: actionTypes.DELETE_TODO_START
    }
}


export const deleteTodoSuccess = (data) => {
    return {
        type: actionTypes.DELETE_TODO_SUCCESS,
    }
}

export const deleteTodoFail = () => {
    return {
        type: actionTypes.DELETE_TODO_FAIL
    }
}

export const deleteTodo = (data) => {
    return async dispatch => {
        dispatch(deleteTodoStart());
        try {
            await axios.delete(`https://obscure-springs-40457.herokuapp.com/deleteTodo`, {
                data: {
                    ids: data
                }
            })
            dispatch(deleteTodoSuccess());
            dispatch(getTodos())
        } catch (error) {
            dispatch(deleteTodoFail())
        }
    }
}

export const setCurrentTodoId = (data) => {
    return {
        type: actionTypes.SET_CURRENT_TODO_ID,
        data:data
    }
}