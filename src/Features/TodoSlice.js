import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [
    {
      id: new Date().getTime(),
      text: 'hello',
    },
  ],
}

const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: new Date().getTime(),
        text: action.payload,
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    editTodo: (state, action) => {
      state.todos = state.todos.find((todos) => todos.id === action.payload)
    },
  },
})

export default TodoSlice.reducer
export const { addTodo, removeTodo, editTodo } = TodoSlice.actions
