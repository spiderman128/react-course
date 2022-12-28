import React from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends React.Component {

    handleCheck = (id, checked) => {
        this.props.onChange(id, checked)
    }

    handleDelete = (id) => {
        console.log('TodoList handleDelete ', id)
        this.props.onDelete(id)
    }

    render() {
        const {items} = this.props
        return (
            <ul className="list-group">
                {items.map((item) => (
                    <TodoItem 
                        item={item} 
                        key={item.id} 
                        onChange={this.handleCheck} 
                        onDelete={this.handleDelete}
                    />
                ))}
            </ul>
        )
    }
}