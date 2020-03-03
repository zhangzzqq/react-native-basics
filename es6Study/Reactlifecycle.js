import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TextInput,
    View,
    Text,
    Clipboard,
} from 'react-native';

export default class Main extends Component {

//构造函数
    constructor(props) {
        super(props);
        console.log('constructor1111111111111111111111111111');
//初始化状态值
        this.state = {message: '欢迎访问 hangge.com'};
    }

//准备加载组件
    componentWillMount() {
        console.log('componentWillMount222222222222222222');
    }

//渲染界面
    render() {
        console.log('render33333333333333');
        return (
            <View style={styles.container}>
                <Text style={styles.info}>
                    {this.state.message}
                </Text>
            </View>
        );
    }

//组件加载成功并渲染出来
    componentDidMount() {
        console.log('componentDidMount');
    }

//组件接收到新的 props 时触发
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
    }

//决定是否需要更新组件
    shouldComponentUpdate(nextProps, nextState) {
            console.log('shouldComponentUpdate');
    }

//组件重新渲染前会调用
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

//组件重新渲染后会调用
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

//组件被卸载前会调用
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        alignItems: 'center',
    },
    info: {
        fontSize: 20,
    },
});

AppRegistry.registerComponent('HelloWorld', () => Main);