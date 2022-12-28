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
    console.log(title)
    const {count, todolist} = this.state
    this.setState({
      todolist: [...todolist, {
        id: count + 1,
        title: title
      }],
      count: count + 1
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
          <TodoList items={todolist} />
        </div>
      </div>
    );
  }
}

export default App;
