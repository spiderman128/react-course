import React from "react";

export default class TodoItem extends React.Component {

    handleChange = (event) => {
        const checked = event.target.checked
        this.props.onChange(this.props.item.id, checked)
    }

    handleDelete = () => {
        console.log('TodoItem handleDelete')
        this.props.onDelete(this.props.item.id)
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