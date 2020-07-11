import React, {Component} from 'react';
import {PermissionsAndroid, StyleSheet, ToastAndroid, TouchableOpacity, View, Text} from 'react-native';

export default class PermissionsAndroidPage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnContainer}
                                  onPress={this.requestReadPermission.bind(this)}>
                    <Text style={styles.btnText}>申请读写权限</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnContainer}
                                  onPress={this.requestCameraPermission.bind(this)}>
                    <Text style={styles.btnText}>申请相机权限</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnContainer}
                                  onPress={this.checkPermission.bind(this)}>
                    <Text style={styles.btnText}>查询是否获取了读写权限</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnContainer}
                                  onPress={this.requestMultiplePermission.bind(this)}>
                    <Text style={styles.btnText}>一次申请所以权限</Text>
                </TouchableOpacity>
            </View>
        )
    }

    show(data) {
        ToastAndroid.show(data, ToastAndroid.SHORT)
    }

    async requestReadPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,{
                    'title': '申请读写权限',
                    'message': '没权限我不能工作，同意就好了'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this.show("你已获取了读写权限")
            } else {
                this.show("获取读写权限失败")
            }
        } catch (err) {
            this.show(err.toString())
        }
    }

    async requestCameraPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    'title': '申请相机权限',
                    'message': '没权限我不能工作，同意就好了'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this.show("你已获取了相机权限")
            } else {
                this.show("获取相机失败")
            }
        } catch (err) {
            this.show(err.toString())
        }
    }

    checkPermission() {
        try {
            const granted = PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
            )
            granted.then((data) => {
                this.show("是否获取读写权限" + data)
            }).catch((err) => {
                this.show(err.toString())
            })
        } catch (err) {
            this.show(err.toString())
        }
    }

    async requestMultiplePermission() {
        try {
            const permissions = [
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                PermissionsAndroid.PERMISSIONS.CAMERA
            ]
            //返回得是对象类型
            const granteds = await PermissionsAndroid.requestMultiple(permissions)
            var data = "是否同意地址权限: "
            if (granteds["android.permission.ACCESS_FINE_LOCATION"] === "granted") {
                data = data + "是\n"
            } else {
                data = data + "否\n"
            }
            data = data + "是否同意相机权限: "
            if (granteds["android.permission.CAMERA"] === "granted") {
                data = data + "是\n"
            } else {
                data = data + "否\n"
            }
            data = data + "是否同意存储权限: "
            if (granteds["android.permission.WRITE_EXTERNAL_STORAGE"] === "granted") {
                data = data + "是\n"
            } else {
                data = data + "否\n"
            }
            this.show(data)
        } catch (err) {
            this.show(err.toString())
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: '#F5FCFF'
    },
    btnContainer: {
        margin: 4,
        borderRadius: 5,
        backgroundColor: '#EE7942',
        alignItems: 'center',
    },
    btnText: {
        padding: 8,
        fontSize: 16,
        color: '#ffffff'
    }
});
