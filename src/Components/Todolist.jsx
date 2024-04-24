import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, editTodo } from '../Features/TodoSlice'
import './Home.css'

const Todolist = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <ul className="list-group">
          {todos.map((todo, id) => {
            return (
              <li className="list-group-item" key={id}>
                {todo.text}
                <div className="button-div">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => dispatch(removeTodo(todo.id))}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => dispatch(editTodo(todo.id))}
                  >
                    Edit
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Todolist
