import React from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps)
        return true
    }

    render() {
        const {items} = this.props
        return (
            <ul className="list-group">
                {items.map((item) => (
                    <TodoItem item={item} key={item.id} />
                ))}
            </ul>
        )
    }
}