import React from "react";
import { createTodo } from "../redux/action/todolist";
import { connect } from "react-redux";

class AddTodo extends React.Component {
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
        this.props.createTodo(this.state.title)
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

const mapStateToProps = null
const mapDispatchToProps = {
    createTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);