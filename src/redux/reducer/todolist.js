import { CREATE_TODO } from "../type";

const initialState = {
    todolist: [],
    count: 0
}

function todolist (state = initialState, action) {
    switch(action.type) {
        case CREATE_TODO:
            return {
                todolist: [...state.todolist, {
                    id: state.count + 1,
                    title: action.payload,
                    checked: false,
                }],
                count: state.count + 1
            }
        default:
            return state;
    }
}

export default todolist