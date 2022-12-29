import React from 'react';
import { Provider } from 'react-redux';
import AddTodo from './components/AddTodo';
// import TodoList from './components/TodoList';
import store from './redux/store';
import './App.css';

class App extends React.Component {

  render () {
    
    return (
      <Provider store={store}>
        <div className="container">
          <h1 className='mt-3'>Todo List</h1>
          <hr />
          <div className='mt-4'>
            <AddTodo />
          </div>
          <div className='mt-3'>
            {/* <TodoList 
              items={todolist}
              onChange={this.handleChange}
              onDelete={this.handleDelete}
            /> */}
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
