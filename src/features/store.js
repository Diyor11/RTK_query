import { configureStore } from '@reduxjs/toolkit'
import todos from './todo/todoSlice'
import name from './name/nameSlice' 

import {todosApi} from './todo/todoServices'


const store = configureStore({
    reducer: {
        todos,
        name,
        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware) 
})


export default store

