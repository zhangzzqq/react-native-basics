import React, {PureComponent} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

export default class MainPage extends PureComponent {

    static navigationOptions = {
        header: null,
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnContainer} onPress={() => {
                    navigate('DetailPage')
                }}>
                    <Text style={styles.textStyle}>跳转详情页</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    btnContainer: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#EE7942',
        height: 38,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: '#ffffff',
        fontSize: 18
    }
});
