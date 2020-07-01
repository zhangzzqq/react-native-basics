import React, {PureComponent} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import SegmentedBar from '../component/SegmentedBar'
import TopNavigator from '../component/TopNavigator'
import CinemaPage from '../pages/CinemaPage'

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
            return (<TopNavigator/>)
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
