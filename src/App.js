import React from 'react';
import { Provider } from 'react-redux';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import store from './redux/store';
import './App.css';

function after3Sec(time1, success) {
  return new Promise((resolve, reject) => { // used with asynchronous function
      setTimeout(() => {
        if(success)
          resolve('success', 'yyy')
        else 
          reject('error', 'xxx')
      }, time1)
  })
}

class App extends React.Component {

  componentDidMount() {
    after3Sec(3000, false)
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

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
            <TodoList />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
