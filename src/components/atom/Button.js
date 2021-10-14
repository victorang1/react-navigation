import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ButtonComponent = (props) => {

    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.button, props.type === 'increment' ? styles.buttonIncrement : styles.buttonDecrement]}>
            <Text style={styles.buttonText}>{props.label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
    },
    button: {
        padding: 16,
        borderRadius: 8,
        minWidth: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonDecrement: {
        marginEnd: 16,
        backgroundColor: '#5f1a37',
    },
    buttonIncrement: {
        backgroundColor: '#7eeedc'
    },
})

export default ButtonComponent;