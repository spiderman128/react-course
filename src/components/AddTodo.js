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

    handleSubmit = (event) => {
        event.preventDefault() // form works with reloading,  preventDefault will stop reloading
        this.props.onAddTodo(this.state.title)
        this.setState({
            title: ''
        })
    }

    render(){
        const {title} = this.state
        
        return (
            <div className="add-todo">
                <form onSubmit={this.handleSubmit}>
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
                                type="submit"
                                className="btn btn-primary w-100"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}