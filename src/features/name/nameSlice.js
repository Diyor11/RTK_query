import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    name: {
        firstName: 'Jhon',
        lastName: 'Doe'
    }
}

const nameSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        setName: (state, {payload}) => {
            state.name = payload
        }
    }
})

export const {setName} = nameSlice.actions
export default nameSlice.reducer