import React, {PureComponent} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import SegmentedBar from '../component/SegmentedBar'
// import TopNavigator from '../component/TopNavigator'
import CinemaPage from '../pages/CinemaPage'
import Text from 'react-native-paper/src/components/Typography/Text';
import createMaterialTopTabNavigator
    from '@react-navigation/material-top-tabs/src/navigators/createMaterialTopTabNavigator';
import NavigationContainer from '@react-navigation/native/src/NavigationContainer';

export default class MoviesPage extends PureComponent {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            segmentedIndex: 0,
        };
    }

    renderTitleBar() {
        return (
            <SegmentedBar
                onPressCity={() => {this.props.navigation.navigate('CityPage')}}
                onPressSearch={() => {this.props.navigation.navigate('SearchPage')}}
                onPressSegmented={(index) => {this.setState({segmentedIndex: index})}}/>
        )
    }

    renderSegmentView() {
        if (this.state.segmentedIndex === 0) {
            return (  <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Settings" component={SettingsScreen} />
                </Tab.Navigator>
            </NavigationContainer>)
        } else {
            return (<CinemaPage/>)
        }
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this.renderTitleBar()}
                {this.renderSegmentView()}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});



function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();
