import TodoItem from './TodoItem'
import { useGetTodosQuery } from '../features/todo/todoServices'
// import { useSelector } from 'react-redux'

export default function List() {
    const {data: todos, isLoading, isSuccess, isError, ...res} = useGetTodosQuery()
    
    if(isError){
        alert(res.error.error)
    }

  return (
    <div className='mt-2 rounded-md bg-white w-fit mx-auto p-3 min-w-[300px]'>
        {isLoading ? <h1>Loading...</h1>:(
            isSuccess && (<ul>
                {todos?.map((todo, index) => (
                    <TodoItem key={todo.id} todo={todo} index={index} />
                ))}
            </ul>)
        )}
    </div>
  )
}
