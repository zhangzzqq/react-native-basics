import React, {PureComponent} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Button, Input, Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

let {width} = Dimensions.get('window');

export default class ElementsPage extends PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <Avatar
                    size="xlarge"
                    rounded
                    source={{
                        uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    }}/>
                <Input
                    inputContainerStyle={[styles.inputStyle,{marginTop: 10},]}
                    placeholder='请输入用户名'
                    leftIcon={
                        <Icon name='user' size={24} color='black'/>}/>
                <Input
                    inputContainerStyle={styles.inputStyle}
                    placeholder='请输入密码'
                    leftIcon={
                        <Icon name='compass' size={24} color='black'/>}/>
                <Button
                    buttonStyle={styles.btnStyle}
                    title="登录"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputStyle: {
        height: 45,
        borderWidth: 1,
        marginLeft: 5,
        paddingLeft: 5,
        borderColor: '#ccc',
        borderRadius: 4
    },
    btnStyle:{
       width:width-60,
       padding:15,
       marginTop:30
    }
});
