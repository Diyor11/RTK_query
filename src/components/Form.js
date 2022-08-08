import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { addTodo } from '../features/todo/todoSlice'
import { useAddTodoMutation } from '../features/todo/todoServices'
import { toast } from 'react-toastify'

export default function Form() {

  const [formData, setFormData] = useState({text: ''})
  const [addTodo, res] = useAddTodoMutation()
  // const dispatch = useDispatch()

  console.log(res)

  const handleSubmit = async(e) => {
    e.preventDefault()

    if(formData.text){
        await addTodo({text: formData.text, id: Date.now()})
        toast.success('Success added new todo')
        // dispatch(addTodo({text: formData.text, id: Date.now()}))
        setFormData({text: ''})
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  return (
    <div className="mx-auto w-fit mt-3 bg-white px-4 py-2 rounded-md">
      <form onSubmit={handleSubmit} className='flex items-center'>
        <input className='border-b border-black p-1 mr-2' autoFocus type="text" name='text' placeholder='Type here...' value={formData.text} onChange={handleChange} />
        <button className='bg-black rounded px-2 py-1 text-white'>Add</button>
      </form>
    </div>
  );
}
