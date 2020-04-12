import * as React from 'react';
import {Button, Text, TextInput, View,Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


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
                                  headerTitle: props => <LogoTitle {...props} />
                              }}


                />
                {/*<Stack.Screen name="Details" component={DetailsScreen} />*/}
                <Stack.Screen name="CreatePost" component={CreatePostScreen}/>
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    initialParams={{itemId: 42}}
                />
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={({route}) => ({title: route.params.name})}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

function HomeScreen({navigation, route}) {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        if (route.params?.post) {
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server
        }
    }, [route.params?.post]);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => setCount(c => c + 1)} title="Update count" />
            ),
        });
    }, [navigation, setCount]);

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button
                title="Create post"
                onPress={() => navigation.navigate('CreatePost')}
            />
            <Text style={{margin: 10}}>Post: {route.params?.post}</Text>

            <Button
                title="Go to Details"
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('Details', {
                        // itemId: 86,
                        otherParam: 'hello world!',
                    });
                }}/>

            <Button style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 20, padding: 30}}
                    title="Go to ProfileScreen"
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        navigation.navigate('Profile', {
                            // itemId: 86,
                            otherParam: 'hello world!',
                        });
                    }}/>

            <Button
                title="Update the title"
                onPress={() => navigation.setOptions({title: 'Updated!'})}
            />

        </View>

    );
}



function CreatePostScreen({navigation, route}) {
    const [postText, setPostText] = React.useState('');
    console.log('--------------------');
    console.log(postText);
    console.log('--------------------');
    console.log(setPostText);
    console.log('--------------------');
    return (
        <>
            <TextInput
                multiline
                placeholder="What's on your mind?"
                style={{height: 200, padding: 10, backgroundColor: 'white'}}
                value={postText}
                onChangeText={setPostText}
            />
            <Button
                title="Done"
                onPress={() => {
                    // Pass params back to home screen
                    navigation.navigate('Home', {post: postText});
                }}
            />
        </>
    );
}


function DetailsScreen({navigation, route}) {
    /* 2. Get the param */
    const {itemId} = route.params;
    const {otherParam} = route.params;
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Button
                title="Go to Details... again"
                onPress={() =>
                    navigation.push('Details', {

                        itemId: Math.floor(Math.random() * 100),
                    })
                }
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
            <Button title="Go back" onPress={() => navigation.goBack()}/>
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}


function ProfileScreen({navigation, route}) {
    /* 2. Get the param */
    const {itemId} = route.params;
    const {otherParam} = route.params;
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>ProfileScreen Screen</Text>


        </View>
    );
}

function LogoTitle() {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            source={require('./icon1.png')}
        />
    );
}







const Stack = createStackNavigator();

export default App;
