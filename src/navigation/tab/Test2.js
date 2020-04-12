import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';


function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="First">
                    {() => (
                        <SettingsStack.Navigator>
                            <SettingsStack.Screen
                                name="Settings"
                                component={SettingsScreen}
                            />
                            <SettingsStack.Screen name="Profile" component={ProfileScreen} />
                        </SettingsStack.Navigator>
                    )}
                </Tab.Screen>
                <Tab.Screen name="Second">
                    {() => (
                        <HomeStack.Navigator>
                            <HomeStack.Screen name="Home" component={HomeScreen} />
                            <HomeStack.Screen name="Details" component={DetailsScreen} />
                        </HomeStack.Navigator>
                    )}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}


const Stack = createStackNavigator();

