import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000',
        prepareHeaders: (headers) => {
            headers.set('Autorization', 'test token')
            return headers
        },
    }),
    tagType: ['Todos'],
    endpoints: builder => ({
        getTodos: builder.query({
            query: () => '/todos',
            providesTags: ['Todos']
        }),
        addTodo: builder.mutation({
            query: (todo) => ({
                url: '/todos',
                method: 'post',
                body: todo
            }),
            invalidatesTags: ['Todos']
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: '/todos/' + id,
                method: 'delete'
            }),
            invalidatesTags: ['Todos']
        }),
        updateTodo: builder.mutation({
            query: (todo) => ({
                url: '/todos/' + todo.id,
                method: 'put',
                body: todo
            }),
            invalidatesTags: ['Todos']
        })
    })
})

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation } = todosApi
