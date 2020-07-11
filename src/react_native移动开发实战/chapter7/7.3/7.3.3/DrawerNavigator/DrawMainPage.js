import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';


export default class DrawMainPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {this.props.navigation.openDrawer();}}>
                    <Text style={styles.textStyle}>侧边栏</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 28,
    },
    btn: {
        backgroundColor: 'red',
        color: 'blue',
        width: 60,
        height: 44,
        marginTop: 115,
        marginLeft: 100
    },
    icon: {
        width: 22,
        height: 22
    },
})
