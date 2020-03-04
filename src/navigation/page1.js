// page1.js
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class page1 extends Component<Props> {
    static navigationOptions = {    //上标题
        title: '第一页',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        navigate('p2');
                    }}>
                    <Text>点我去第二页！</Text>
                </TouchableOpacity>


            </View>
        );
    }
}