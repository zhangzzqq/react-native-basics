import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Text} from 'react-native';

export default class TouchableOpacityPage extends Component {

    constructor(props) {
        super(props)
        this.state = {count: 0}
    }

    onPress() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.touchableStyle} onPress={this.onPress.bind(this)}>
                    <Text style={styles.txtStyle}>
                        点击加1
                    </Text>
                </TouchableOpacity>
                <Text style={[styles.countText]}>
                    {this.state.count !== 0 ? this.state.count : null}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },
    touchableStyle: {
        width:300,
        height: 38,
        borderRadius: 5,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#06C1AE',
    },
    txtStyle: {
        color: '#ffffff',
        textAlign:'center',
        fontSize:18
    },
    countText: {
        marginTop:10,
        alignSelf:'center',
        fontSize:38,
        color: '#06C1AE'
    }
})
