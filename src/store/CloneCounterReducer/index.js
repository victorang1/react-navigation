import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const cloneCounterSlice = createSlice({
    name: 'cloneCounter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

export const valueCloneCounter = state => state.cloneCounter.value

export const { increment, decrement, incrementByAmount } = cloneCounterSlice.actions

export default cloneCounterSlice.reducer