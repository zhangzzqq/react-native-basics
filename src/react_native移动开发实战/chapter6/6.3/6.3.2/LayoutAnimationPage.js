import React, {Component} from 'react';
import {View, StyleSheet, Text, LayoutAnimation, TouchableOpacity} from 'react-native';


const customAnim = {
    customSpring: {
        duration: 400,
        create: {
            type: LayoutAnimation.Types.spring,
            property: LayoutAnimation.Properties.scaleXY,
            springDamping: 0.6
        },
        update: {
            type: LayoutAnimation.Types.spring,
            springDamping: 0.6
        }
    },
    customLinear: {
        duration: 200,
        create: {
            type: LayoutAnimation.Types.linear,
            property: LayoutAnimation.Properties.opacity,
        },
        update: {
            type: LayoutAnimation.Types.easeInEaseOut
        }
    }
};

export default class LayoutAnimationPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 200,
            height: 200,
        };
    }

    componentWillUpdate() {
        LayoutAnimation.configureNext(customAnim.customSpring);
    }

    largePress() {
        this.setState({width: this.state.width + 20, height: this.state.height + 20});
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
