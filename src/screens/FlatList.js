import React from 'react';
import { View, SafeAreaView, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const FlatListScreen = () => {
    const contacts = [
        { id: '1', name: 'A', phoneNumber: '0815123123123' },
        { id: '2', name: 'B', phoneNumber: '0815123123123' },
        { id: '3', name: 'C', phoneNumber: '0815123123123' },
        { id: '4', name: 'D', phoneNumber: '0815123123123' },
        { id: '5', name: 'E', phoneNumber: '0815123123123' },
    ]
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={contacts}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={styles.itemContainer}>
                            <Text>{item.name}</Text>
                            <Text>{item.phoneNumber}</Text>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.id}>

            </FlatList>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    itemContainer: {
        marginBottom: 12,
    }
})

export default FlatListScreen;