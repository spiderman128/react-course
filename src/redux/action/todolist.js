import { CREATE_TODO } from "../type"

export const createTodo = (title) => dispatch => {
    dispatch({
        type: CREATE_TODO,
        payload: title
    })
}