import { configureStore } from '@reduxjs/toolkit';
import CloneCounterReducer from './CloneCounterReducer';
import counterReducer from './CounterReducer';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cloneCounter: CloneCounterReducer
    },
})