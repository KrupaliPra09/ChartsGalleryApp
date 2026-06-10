import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LineChartsScreen from '../screens/LineChartsScreen';
import PieChartsScreen from '../screens/PieChartsScreen';
import HomeScreen from '../screens/HomeScreen';
import BarChartsScreen from '../screens/BarChartsScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
            />

            <Stack.Screen
                name="BarCharts"
                component={BarChartsScreen}
            />

            <Stack.Screen
                name="LineCharts"
                component={LineChartsScreen}
            />
            <Stack.Screen
                name="PieCharts"
                component={PieChartsScreen}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;