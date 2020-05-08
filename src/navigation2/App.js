// In App.js in a new project

import * as React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation,route}) {

    React.useEffect(() => {
        if (route.params?.post) {
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server
        }
    }, [route.params?.post]);


    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>

            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details', {
                    /* 1. Navigate to the Details route with params */
                    itemId: 86,
                    otherParam: 'anything you want here',

                })
                }
            />

            <Button
                title="Create post"
                onPress={() => navigation.navigate('CreatePost')}
            />
            <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>


            <Button
                title="Go to Profile"
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Custom profile header' })
                }
            />
            {/*<Button title="Go back" onPress={() => navigation.exit()} />*/}
        </View>
    );
}

function DetailsScreen({route,navigation}) {
    console.log("--route--")
    console.log(route)
    console.log(navigation)
    /* 2. Get the param */
    const { itemId } = route.params;
    const { otherParam } = route.params;


    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>

            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>

            <Button
                title="Go to Details... again"
                //如果您已经在该屏幕上，则说它什么也不做是有意义的
                // onPress={() => navigation.navigate('Details')}
                onPress={() => navigation.push('Details')}//表达添加另一条路线的意图
            />

            <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>

            <Button title="Go back" onPress={() => navigation.goBack()}/>

            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />

            <Button
                title="Update the title"
                onPress={() => navigation.setOptions({ title: 'Updated!' })}
            />


        </View>
    );
}

function CreatePostScreen({ navigation }) {
    const [postText, setPostText] = React.useState('');

    return (
        <>
            <TextInput
                multiline
                placeholder="What's on your mind?"
                style={{ height: 200, padding: 10, backgroundColor: 'white' }}
                value={postText}
                onChangeText={setPostText}
            />
            <Button
                title="Done"
                onPress={() => {
                    // Pass params back to home screen
                    navigation.navigate('Home', { post: postText });
                }}
            />
        </>
    );
}

function ProfileScreen({ navigation ,route }) {
    console.log('----route.params---')
    console.log(route)
    console.log(route.params)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}



const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator

                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}

            >

                <Stack.Screen name="Home" component={HomeScreen}
                              options={{title: 'Overview',



                              }}/>
                <Stack.Screen name="Details" component={DetailsScreen}/>
                <Stack.Screen name="CreatePost" component={CreatePostScreen}

                />
                {/*{props => <HomeScreen {...props} extraData={someData} />}*/}
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={({ route }) => ({ title: route.params.name })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default App;
