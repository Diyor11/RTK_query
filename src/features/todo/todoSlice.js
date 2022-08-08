import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, {payload}) => {
            state.todos.push(payload)
        },
        deleteTodo: (state, {payload}) => {
            state.todos = state.todos.filter(todo => todo.id !== payload)
        },
        editTodo: (state, {payload}) => {
            state.todos = state.todos.map(todo => todo.id === payload.id ? {...todo, text: payload.text}:todo)
        },
        setTodos: (state, {payload}) => {
            if(payload?.length)
                state.todos = payload
        }
    },
})

export const { addTodo, deleteTodo, editTodo, setTodos } = todoSlice.actions
export default todoSlice.reducer