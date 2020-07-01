import React, {Component} from 'react';
import {View, StyleSheet, SegmentedControlIOS, Text} from 'react-native';

export default class SegmentedControlIOSPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex:0
        };
    }

    render() {
        let data=['Android', 'iOS','RN'];
        return (
            <View style={styles.container}>
                <SegmentedControlIOS
                    values={data}
                    selectedIndex={this.state.selectedIndex}
                    onChange={(event) => {
                        this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
                    }}
                />
                <Text style={styles.txtStyle}>{data[this.state.selectedIndex]}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:30,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },
    SegmentedStyle: {
        margin:20,
    },
    txtStyle: {
        textAlign: 'center',
        marginTop: 10
    }
});
