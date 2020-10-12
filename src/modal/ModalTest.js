import React, { Component } from 'react';
import { Text } from 'react-native';

class Cat extends Component {
    static staticObject = "hangge.com";  //定义类的静态成员变量
    static staticMethod () {  //定义类的静态成员函数
        console.log("欢迎访问hangge.com");
    }


    constructor(props) {
        super(props);
        console.log("constructor(props)");
    }


    render() {
        return (
            <Text>Hello, I am your cat!</Text>
        );
    }
}

function test() {

}

export default Cat;
