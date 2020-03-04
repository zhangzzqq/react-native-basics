// page2.js
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class page2 extends Component<Props> {
    static navigationOptions = {    //上标题
        title: '第二页',
    };

    render() {
        return (
            <View>
                <Text>欢迎来到第二页！</Text>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.goBack()
                }}
                >
                    <Text>
                        点我返回
                    </Text>
                </TouchableOpacity>
            </View>

        );
    }
}