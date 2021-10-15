import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const DataFetchingScreen = () => {

    const urlGetData = 'http://jsonplaceholder.typicode.com/todos'

    const onPressGetData = async () => {
        try {
            const result = await axios.get(urlGetData)
            console.log(result)
        } catch (ex) {
            console.log("ERROR: ", ex.message);
        }
    }

    return (
        <SafeAreaView style={styles.fill}>
            <View style={[styles.fill, styles.center]}>
                <Button title={'Get Data'} onPress={onPressGetData} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fill: {
        flex: 1,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default DataFetchingScreen;