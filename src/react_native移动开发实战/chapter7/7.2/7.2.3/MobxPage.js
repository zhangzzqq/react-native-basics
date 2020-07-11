import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View,
} from 'react-native';

import {observer, inject} from "mobx-react";

@inject('rootStore')
@observer
export default class MobxPage extends Component {

    nameStore = this.props.rootStore.nameStore;
    ageStore = this.props.rootStore.ageStore;

    onChange() {
        this.nameStore.setName("李四");
        this.ageStore.setAge("20");
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txt}>{'姓名：' + this.nameStore.name + '\n 年龄：' + this.ageStore.age}</Text>
                <Text style={styles.btn} onPress={() => this.onChange()}>切换数据</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    txt: {
        fontSize: 28,
    },
    btn: {
        marginTop: 20,
        fontSize: 28,
        color:'blue'
    }
});
