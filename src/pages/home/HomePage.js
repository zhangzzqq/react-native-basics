import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => {
                        this.props.navigation.dispatch(StackActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({ routeName: 'Details' })
                            ],
                        }))
                    }}
                />
            </View>
        );
    }
}