import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import { useIsDrawerOpen } from '@react-navigation/drawer';
function HomeScreen({navigation}) {
    const isDrawerOpen = useIsDrawerOpen();
    alert(isDrawerOpen)
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button
                style={{margin: 10}}
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />

            <Button
                style={{margin: 10, padding: 10, color: 'red'}}
                onPress={() => navigation.openDrawer()}
                title="navigation.openDrawer()"
            />


            <Button
                style={{margin: 10}}
                onPress={() => navigation.closeDrawer()}
                title="navigation.closeDrawer()"
            />

            <Button
                style={{margin: 10}}
                onPress={() => navigation.toggleDrawer()}
                title="navigation.toggleDrawer();"
            />


        </View>
    );
}

function NotificationsScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button onPress={() => navigation.goBack()} title="Go back home"/>
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen}/>
                <Drawer.Screen name="Notifications" component={NotificationsScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

