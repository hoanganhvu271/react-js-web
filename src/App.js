import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js';
import { useState, useEffect } from 'react';
import Todo from './views/Todo.js';
import Blog from './views/Blog.js';
import AddNewBlog from './views/AddNewBlog.js';
import YoutubeSearch from './views/YoutubeSearch.js';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route
} from 'react-router-dom'

import DetailBlog from './views/DetailBlog.js';
function App() {
  // let name = "Vu"
  const [name, setName] = useState('Vu')
  const [address, setAddress] = useState('')
  const [todos, setTodos] = useState([
    { id: '1', title: 'todo1', type: 't1' },
    { id: '2', title: 'todo2', type: 't2' }
  ])

  // // chay khi giao dien re - rendering
  // useEffect(() => {
  //   console.log('useEffect')
  // }, [address]);

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

    <Router>

      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />


        </header >

        <Routes>
          <Route exact path="/" element={
            <h1> Helo {name}</h1>

          }>

          </Route>
          <Route path="/todo" element={
            <>
              <Todo
                todos={todos}
                title='All todo list'
                deleteDataTodo={deleteDataTodo}

              />
              <input type='text' value={address} onChange={(event) => onChangeHandler(event)} />
              <button type='button' onClick={(event) => onClickHandler(event)}>  Click !!!</button>
            </>

          }>
          </Route>

          <Route path="/blog" element={

            // <h1>CCS</h1>
            <Blog />
          }>
          </Route>


          <Route path="/blog/:id" element={

            <DetailBlog />
          }>
          </Route>

          <Route path="/add-new-blog" element={

            <AddNewBlog />
          }>
          </Route>

          <Route path="/about" element={

            <YoutubeSearch />
          }>
          </Route>

        </Routes>
      </div >

    </Router>

  );
}

export default App;
