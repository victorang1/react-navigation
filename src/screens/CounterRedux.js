import React from 'react';
import { Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../store/CounterReducer'
import { increment as cloneIncrement, decrement as cloneDecrement, incrementByAmount as cloneIncrementByAmount, valueCloneCounter } from '../store/CloneCounterReducer'

const CounterReduxScreen = () => {
    const valueCounter = useSelector((state) => state.counter.value)
    const cloneValueCounter = useSelector(valueCloneCounter)
    const dispatch = useDispatch()

    const inc = () => {
        dispatch(increment())
    }

    const dec = () => {
        dispatch(decrement())
    }

    return (
        < View >
            <Text>CounterReduxScreen</Text>
            <Text>Clone Counter {cloneValueCounter}</Text>
            <Text>{valueCounter}</Text>
            <Button title={"Increment"} onPress={inc} />
            <Button title={"Decrement"} onPress={dec} />
        </View >
    )
};

export default CounterReduxScreen;
