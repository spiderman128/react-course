import './App.css';
import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todolist: [],
      count: 0
    }
  }

  handleAddTodo = (title) => {
    
    const {count, todolist} = this.state
    this.setState({
      todolist: [...todolist, {
        id: count + 1,
        title: title,
        checked: false
      }],
      count: count + 1
    })
  }

  handleChange = (id, checked) => {

    const todolist = this.state.todolist.map(item => {
      if(item.id === id)
        return {
          ...item, 
          checked: checked
        }
      else 
        return item
    })

    this.setState({
      todolist: todolist
    })
  }

  handleDelete = (id) => {
    console.log('App handleDelete ', id)
    const todolist = this.state.todolist.filter(item => item.id !== id)
    this.setState({
      todolist
    })
  }

  render () {
    const {todolist} = this.state
    
    return (
      <div className="container">
        <h1 className='mt-3'>Todo List</h1>
        <hr />
        <div className='mt-4'>
          <AddTodo onAddTodo={this.handleAddTodo} />
        </div>
        <div className='mt-3'>
          <TodoList 
            items={todolist}
            onChange={this.handleChange}
            onDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;
