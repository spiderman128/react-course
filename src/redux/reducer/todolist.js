import { CREATE_TODO, DELETE_TODO, UPDATE_TODO } from "../type";

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
        case UPDATE_TODO: 
            return {
                ...state,
                todolist: state.todolist.map(item => {
                    if(item.id === action.payload.id) {
                        return {
                            ...item,
                            checked: action.payload.checked
                        }
                    } else {
                        return item
                    }
                })
            }
        case DELETE_TODO:
            return {
                ...state,
                todolist: state.todolist.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}

export default todolist