import React from "react";
import { connect } from "react-redux";
import { updateTodo, deleteTodo } from "../redux/action/todolist";

class TodoItem extends React.Component {

    handleChange = (event) => {
        const checked = event.target.checked
        this.props.updateTodo(this.props.item.id, checked)
    }

    handleDelete = () => {
        this.props.deleteTodo(this.props.item.id)
    }

    render () {
        const {item} = this.props
        return (
            <li className="list-group-item">
                <div className="d-flex align-items-center">
                    <input 
                        type="checkbox" 
                        className="form-check-input" 
                        checked={item.checked} // this is not this.state, it's from this.props
                        onChange={this.handleChange}
                    />
                    <span className={`ms-3 ${item.checked ? 'text-decoration-line-through' : ''}`}>
                        {item.title}
                    </span>
                    <button 
                        className="btn btn-danger btn-sm ms-auto" 
                        onClick={this.handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </li>
        )
    }
}

const mapDispatchToProps = {
    updateTodo: updateTodo,
    deleteTodo: deleteTodo
}

export default connect(null, mapDispatchToProps)(TodoItem)