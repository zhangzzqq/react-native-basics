// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Platform,BackHandler} from 'react-native'

function HomeScreen({ navigation }) {
    console.log("-----navigation------")
    console.log(navigation)
    debugger
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
            {/*<Button title="Go back" onPress={() => navigation.exit()} />*/}
        </View>
    );
}

function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details... again"
                //如果您已经在该屏幕上，则说它什么也不做是有意义的
                // onPress={() => navigation.navigate('Details')}
                onPress={() => navigation.push('Details')}//表达添加另一条路线的意图
            />

            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />

            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="Home" component={HomeScreen }
                              options={{ title: 'Overview' }}/>
                <Stack.Screen name="Details" component={DetailsScreen} />
                {/*{props => <HomeScreen {...props} extraData={someData} />}*/}

            </Stack.Navigator>
        </NavigationContainer>
    );
}



export default App;
