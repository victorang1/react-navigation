import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';

const ListScreen = () => {
    const listNumbers = [1, 2, 3, 4, 5]
    return (
        <SafeAreaView>
            <View>
                {
                    listNumbers.map(item => <Text>{item}</Text>)
                }
            </View>
        </SafeAreaView>
    )
}

export default ListScreen;
