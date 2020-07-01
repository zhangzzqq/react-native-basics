import React, { Component } from 'react';
import { AppRegistry, View, TextInput,Text,StyleSheet } from 'react-native';
class UselessTextInput extends Component {
    render() {
        return (
            <TextInput
                {...this.props} // 将父组件传递来的所有props传递给TextInput;比如下面的multiline和numberOfLines
                editable = {true}
                maxLength = {40}
            />
        );
    }
}

export default  class UselessTextInputMultiline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Useless Multiline Placeholder',
        };
    }

    // 你可以试着输入一种颜色，比如red，那么这个red就会作用到View的背景色样式上
    render() {
        return (
            <View style={{
                backgroundColor: this.state.text,
                borderBottomColor: '#000000',
                borderBottomWidth: 1 }}
            >
                <UselessTextInput
                    multiline = {true}
                    numberOfLines = {4}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />

                {/*<Text >新密码</Text>*/}
                <TextInput
                    style={{ height: 40, borderColor: 'yellow', borderWidth: 1 , marginBottom:50,marginTop:50,
                            fontSize: 14,color:'blue',
                    }}

                    placeholder="请输入账号"
                    placeholderTextColor="red"
                    // onChangeText={
                    //     text => onChangeText(text)
                    //
                    // }
                    // value={value}
                />


                <View style={styles.item2}>
                    <Text style={styles.text}>新密码12</Text>
                    <TextInput inputContainerStyle={styles.inputContainer}
                               inputStyle={styles.inputText} maxLength={20}
                           onChangeText={(newPassword) => this.setState({newPassword}, () => {
                                   // this.props.navigation.setParams({newPassword: newPassword})
                               }
                           )} value={this.state.newPassword}
                           placeholder="8-20位大小写字母、数字、符号四种组合" placeholderTextColor="#CCC"  placeholderText

                           // secureTextEntry={true}

                    />
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    item1: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        height: 55,
        borderBottomColor: '#EBEBEB',
        borderBottomWidth: 10,
        alignItems: 'center',
        paddingLeft: 15
    },
    item2: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        height: 45,
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingLeft: 15
    },
    text: {
        color: '#f00',
        fontSize: 22,
        width: 71,
    },
    inputContainer: {
        flexDirection: 'row',
        borderBottomWidth: 0,
        flex: 1,
        paddingRight: 15,
    },
    inputText: {
        color:'#ff0',
        backgroundColor:'#fee',
        height: 2000,
        // color: '#999',
        fontSize: 18,
        borderBottomWidth: 0,
        
    }
    
});



// App2 registration and rendering
AppRegistry.registerComponent(
    'AwesomeProject',
    () => UselessTextInputMultiline
);
