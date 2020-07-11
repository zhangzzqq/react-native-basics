import React, {Component} from 'react';
import {View, StyleSheet, Text, PixelRatio, TouchableOpacity} from 'react-native';


export default class AnimationFramePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 200,
            height: 100,
        };
    }

    largePress() {
        let count = 0;
        while (++count < 30) {
            requestAnimationFrame(() => {
                this.setState({
                    width: this.state.width + 1,
                    height: this.state.height + 1
                });
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.content, {width: this.state.width, height: this.state.height}]}/>
                <TouchableOpacity style={styles.btnContainer} onPress={this.largePress.bind(this)}>
                    <Text style={styles.textStyle}>点击增大</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },
    content: {
        backgroundColor: '#FF0000',
        marginBottom: 10,
    },
    btnContainer: {
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#EE7942',
        height: 38,
        width: 320,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 18,
        color: '#ffffff',
    }
});
