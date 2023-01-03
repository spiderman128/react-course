import { CREATE_TODO, DELETE_TODO, UPDATE_TODO } from "../type"
import axios from "axios"

export const createTodo = (title) => dispatch => {
    dispatch({
        type: CREATE_TODO,
        payload: title
    })
}

export const updateTodo = (id, checked) => dispatch => {
    dispatch({
        type: UPDATE_TODO,
        payload: { id, checked }
    })
}

export const deleteTodo = (id) => dispatch => {
    dispatch({
        type: DELETE_TODO,
        payload: id
    })
}