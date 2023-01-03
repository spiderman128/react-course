import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";

class TodoList extends React.Component {

    render() {
        const {todolist} = this.props

        return (
            <ul className="list-group">
                {todolist.map((item) => (
                    <TodoItem 
                        item={item}
                        key={item.id}
                    />
                ))}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    todolist: state.todos.todolist
})

export default connect(mapStateToProps, null)(TodoList)