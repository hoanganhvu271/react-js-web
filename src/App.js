import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js';
import { useState, useEffect } from 'react';
import Todo from './views/Todo.js';


function App() {
  // let name = "Vu"
  const [name, setName] = useState('Vu')
  const [address, setAddress] = useState('')
  const [todos, setTodos] = useState([
    { id: '1', title: 'todo1', type: 't1' },
    { id: '2', title: 'todo2', type: 't2' }
  ])

  // chay khi giao dien re - rendering
  useEffect(() => {
    console.log('useEffect')
  }, [address]);

  const onClickHandler = (event) => {
    if (!address) {
      alert('empty');
      return;
    }
    let newTodo = { id: Math.floor(Math.random() * 1000 + 1), title: address, type: 't1' }
    setTodos([...todos, newTodo])
    setAddress('')

  }
  const onChangeHandler = (event) => {
    setAddress(event.target.value)
    // console.log(event.target.value)
  }

  const deleteDataTodo = (id) => {
    let currentDataTodo = todos
    currentDataTodo = currentDataTodo.filter(item => item.id !== id)
    setTodos(currentDataTodo)
  }

  return (

    <div className="App">

      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Helo {name}</h1>

        <Todo
          todos={todos}
          title='All todo list'
          deleteDataTodo={deleteDataTodo}
        />

        <Todo
          todos={todos.filter(item => item.type === 't2')}
          title="t2's todo list"
          deleteDataTodo={deleteDataTodo}
        />

        <input type='text' value={address} onChange={(event) => onChangeHandler(event)} />
        <button type='button' onClick={(event) => onClickHandler(event)}>  Click !!!</button>
      </header >
    </div >

  );
}

export default App;
