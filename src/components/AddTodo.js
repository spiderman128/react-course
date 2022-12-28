import React from "react";

export default class AddTodo extends React.Component {
    constructor() {
        super()
        this.state = {
            title: ''
        }
    }

    handleChange = (event) => {
        this.setState({ // asynchronous function
            title: event.target.value
        })
    }

    handleClick = () => {
        this.props.onAddTodo(this.state.title)
    }

    render(){
        const {title} = this.state
        return (
            <div className="add-todo">
                <div className="row">
                    <div className="col-9">
                        <input type="text" 
                            className="form-control" 
                            value={title} 
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className="col-3">
                        <button 
                            className="btn btn-primary w-100"
                            onClick={this.handleClick}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}