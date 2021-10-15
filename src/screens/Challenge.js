import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ChallengeScreen = () => {
    const [active, setActive] = useState(false)
    const route = useRoute();

    console.log(route)

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => setActive(prevState => !prevState)}>
                {
                    !active ? <View style={styles.nonActiveCircle} />
                        : <View style={styles.activeCircle}>
                            <View style={styles.redCircle} />
                        </View>
                }
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nonActiveCircle: {
        padding: 12,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'black'
    },
    activeCircle: {
        padding: 4,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'red'
    },
    redCircle: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 50,
    }
})

export default ChallengeScreen;