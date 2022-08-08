import { useState } from 'react'
// import { useDispatch } from 'react-redux'
import { AiOutlineDelete } from 'react-icons/ai'
import { GrEdit } from 'react-icons/gr'
// import { deleteTodo, editTodo } from '../features/todo/todoSlice'
import { useDeleteTodoMutation, useUpdateTodoMutation } from '../features/todo/todoServices'


export default function TodoItem({todo, index}) {

    const [editing, setEditing] = useState(false)
    // const dispatch = useDispatch()

    const [deleteTodo] = useDeleteTodoMutation()
    const [editTodo] = useUpdateTodoMutation()

    const removeTodo = () => {
        deleteTodo(todo.id)
        // dispatch(deleteTodo(todo.id))
    }

    const updateTodo = (e) => {
        e.preventDefault()
        const value = e.target[0].value.trim()
        if(value){
            editTodo({...todo, text: value})
            // console.log(allEdit)
            // dispatch(editTodo({...todo, text: value}))
            setEditing(false)
        }
    }

  return (
    <li className='flex items-center justify-between w-full mt-2'>
        {editing ? (
            <form onSubmit={updateTodo} className='w-full'>
                <input className='border-b px-1 w-full border-b-black' autoFocus defaultValue={todo.text} />
            </form>
        ):(
            <>
            <div className='text-lg mr-4'>{++index}. {todo.text}</div>
            <div className="flex items-center">
                <button className='text-red-500 border border-red-500 rounded p-1' onClick={removeTodo}>
                    <AiOutlineDelete />
                </button>
                <button className='ml-2 border border-black rounded p-1' onClick={() => setEditing(true)}>
                    <GrEdit />
                </button>
            </div>
            </>
        )}
    </li>
  )
}
