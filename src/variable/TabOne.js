import {Button, Text, View} from 'react-native';
import React, {Component} from 'react';
// import global from './Global'
import './Global.js';

/**
 *
 * 静态变量
 *
 * 全局变量的使用：
 *  1 导入文件方式
 *  2 全局变量方式
 */
export default class TabOne extends Component{

    static staticdefine = 123;

    constructor(props){
        super(props);
    }

    render(){

        return (<View style={{padding:20}}>
            <Text>静态变量：{TabOne.staticdefine}</Text>

            <Button title="modify static variable"
                    onPress={this.actionButton}
                    color={'#00f'}/>


            {/*<Text>{global.name}</Text>*/}
            {/*<Text>{global.website}</Text>*/}

            {/*<Button title="modify The global variable "*/}
            {/*        onPress={this.modifyVariableButton}*/}
            {/*        color={'#00f'}/>*/}


            <Text>{global.variables.authorization}</Text>
            <Text>{global.variables.language}</Text>
            <Button title="modify The global variable2 "
                    onPress={this.modifyVariableButton2}
                    color={'#00f'}/>


        </View>);
    }

    actionButton = () => {
        TabOne.staticdefine=321
        alert( TabOne.staticdefine)
    }

    modifyVariableButton = () => {
        global.name=12;
        alert(global.name)
    }

    modifyVariableButton2 = () => {
        global.variables.language='chinese';
        alert(global.variables.language)
    }
}
