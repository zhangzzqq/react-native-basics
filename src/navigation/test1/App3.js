import * as React from 'react';
import {View,Button, Image, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


function HomeScreen({navigation}) {
    const [count, setCount] = React.useState(0);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() =>
                    setCount(c => c + 1)} title="Update count"/>
            ),
        });
    }, [navigation, setCount]);

    return (
        <View><Text>Count: {count}</Text>

            <Button
                title="Go to Stack"
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('Stack', {
                        // itemId: 86,
                        otherParam: 'hello world!',
                    });
                }}/>

        </View>


    );
}

function StackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={({navigation, route}) => ({
                    headerTitle: props => <LogoTitle {...props} />,
                })}
            />
        </Stack.Navigator>
    );
}


function LogoTitle() {
    return (
        <Image
            style={{width: 50, height: 50}}
            source={require('./icon1.png')}
        />
    );
}


function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
                             screenOptions={{
                                 headerStyle: {
                                     backgroundColor: '#f4511e',
                                 },
                                 headerTintColor: '#fff',
                                 headerTitleStyle: {
                                     fontWeight: 'bold',
                                 },
                             }}>

                <Stack.Screen name="Home" component={HomeScreen}
                              options={{
                                  title: 'My home',
                                  // headerStyle: {
                                  //     backgroundColor: '#f4511e',
                                  // },
                                  // headerTintColor: '#fff',
                                  // headerTitleStyle: {
                                  //     fontWeight: 'bold',
                                  // },
                                  headerTitle: props => <LogoTitle {...props} />,
                              }}


                />

                <Stack.Screen
                    name="Stack"
                    component={StackScreen}
                    options={({route}) => ({title: route.params.name})}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const Stack = createStackNavigator();

export default App;
