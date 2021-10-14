import React, { useState, useRef, useMemo, useCallback } from 'react';
import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';
import ButtonsComponent from '../components/molecules/Buttons';

const CounterScreen = ({ }) => {
    const [counter, setCounter] = useState(0);

    const inc = () => {
        setCounter(counter => counter + 1);
    }

    const dec = () => {
        setCounter(counter => counter - 1);
    }

    const reset = () => {
        setCounter(0);
    }

    const handleSheetChanges = () => {

    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Simple App Counter in React Native</Text>
            <Text style={styles.counterText}>{counter}</Text>
            <ButtonsComponent onPressInc={inc} onPressDec={dec} />
            <Button
                title={'Reset'}
                color='#841584'
                onPress={reset}
            />
            <Button
                title={'Open Bottom Sheet'}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0e0e0e',
        textAlign: 'center'
    },
    counterText: {
        fontSize: 82,
        fontWeight: 'bold',
        color: '#0e0e0e',
        textAlign: 'center',
    },
})

export default CounterScreen;