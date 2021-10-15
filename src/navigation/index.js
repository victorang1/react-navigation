import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChallengeScreen from '../screens/Challenge'
import Counter from '../screens/Counter'
import FlatList from '../screens/FlatList';
import ScreenName from './ScreenName';
import CounterReduxScreen from '../screens/CounterRedux';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const stackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={ScreenName.CounterScreen}>
            <Stack.Screen name={ScreenName.ChallengeScreen} component={ChallengeScreen} />
            <Stack.Screen name={ScreenName.CounterScreen} component={Counter} />
            <Stack.Screen name={ScreenName.AboutScreen} component={FlatList} />
        </Stack.Navigator>
    )
}

export default function RouteNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            // screenOptions={{
            //     headerShown: false
            // }}
            >
                <Tab.Screen options={{ headerShown: false }} name={ScreenName.HomeScreen} component={stackNavigator} />
                <Tab.Screen name={ScreenName.AboutScreen} component={FlatList} />
                <Tab.Screen name={ScreenName.TestScreen} component={CounterReduxScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}