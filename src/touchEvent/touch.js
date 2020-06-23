import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text
} from 'react-native';


export default class GestureScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text1: 'A 父组件',
            text2:'B 子组件'
        };
        this.gestureHandlers = {
            onStartShouldSetResponder: () => true,
            onMoveShouldSetResponder: () => true,
            onResponderStart: () => {
                console.log('onResponderStart')
            },
            onResponderGrant: () => {
                console.log('onResponderGrant');
                this.setState({text1: 'A 父组件 被点击'})
            },
            onResponderMove: () => {
                console.log('onResponderMove')
            },
            onResponderEnd: () => {
                console.log('onResponderEnd')
            },
            onResponderRelease: () => {
                console.log('onResponderRelease')
                this.setState({text1:'A 父组件'})
            },
        };
        this.gestureHandlers2 = {
            onStartShouldSetResponder: () => true,
            onMoveShouldSetResponder: () => true,
            onResponderStart: () => {
                console.log('onResponderStart---->2')
            },
            onResponderGrant: () => {
                console.log('onResponderGrant---->2');
                this.setState({text2: 'B 子组件 被点击'})
            },
            onResponderMove: () => {
                console.log('onResponderMove---->2')
            },
            onResponderEnd: () => {
                console.log('onResponderEnd---->2')
            },
            onResponderRelease: () => {
                console.log('onResponderRelease---->2')
                this.setState({text2: 'B 子组件'})
            },
        };
    }


    render() {
        return (
            <View style={styles.container}>
                <View
                    {...this.gestureHandlers}
                    style={styles.gesview}>
                    <Text style={styles.text}>{this.state.text1}</Text>

                    <View
                        style={styles.sonview}
                        {...this.gestureHandlers2}>
                        <Text style={styles.text}>{this.state.text2}</Text>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(236,236,236)'
    },
    gesview: {
        width: 200,
        height: 200,
        backgroundColor:'#B34D76',
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    sonview: {
        width:100,
        height:100,
        backgroundColor:'#33AECC',
        alignSelf:'center',
        marginTop:20,
    }

});
