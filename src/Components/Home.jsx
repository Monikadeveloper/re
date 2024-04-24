import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addTodo } from '../Features/TodoSlice'
import Todolist from './Todolist'
import './Home.css'

const Home = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodohandle = (e) => {
    console.log(input)
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <>
      <h1>To Do with Redux</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter task here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={addTodohandle}
        >
          Add task
        </button>
      </div>
      <Todolist />
    </>
  )
}

export default Home
