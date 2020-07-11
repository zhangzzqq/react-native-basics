import React, {Component} from 'react';
import {View, StyleSheet, AsyncStorage, Text, TouchableOpacity} from 'react-native';

let keyName = 'name';
let keyValue = '张三';
let keyValue1 = '李四';
export default class AsyncStoragePage extends Component {

    //保存数据
    saveData = async () => {
        try {
            await AsyncStorage.setItem(keyName, keyValue);
        } catch (error) {
            console.log(error)
        }
    };

    //获取数据
    getData = async () => {
        try {
            const value = await AsyncStorage.getItem(keyName);
            if (value !== null) {
                alert('获取的数据：'+value)
            }
        } catch (error) {
            console.log(error)
        }
    };

    //更新数据
    updateDate = async () => {
        try {
            const value = await AsyncStorage.getItem(keyName);
            if (value !== null) {
                AsyncStorage.setItem(keyName, keyValue1)
            }
        } catch (error) {
            console.log(error)
        }
    };

    //删除指定key的数据
    removeData = async () => {
        try {
            const value = await AsyncStorage.removeItem(keyName);
            if (value !== null) {
                alert('删除成功')
            }
        } catch (error) {
            console.log(error)
        }
    };

    //删除全部数据
    removeAllData = async () => {
        try {
            const value = await AsyncStorage.clear();
            if (value !== null) {
                console.log(value);
            }
        } catch (error) {
            console.log(error)
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnContainer} onPress={this.saveData.bind(this)}>
                    <Text style={styles.textStyle}>保存数据</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnContainer} onPress={this.getData.bind(this)}>
                    <Text style={styles.textStyle}>查询数据</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnContainer} onPress={this.updateDate.bind(this)}>
                    <Text style={styles.textStyle}>更新数据</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnContainer} onPress={this.removeData.bind(this)}>
                    <Text style={styles.textStyle}>删除KEY数据</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnContainer} onPress={this.removeAllData.bind(this)}>
                    <Text style={styles.textStyle}>清空数据</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: 30,
        backgroundColor: '#F5FCFF'
    },
    btnContainer: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#EE7942',
        height: 38,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: '#ffffff',
        fontSize: 18
    }
});
