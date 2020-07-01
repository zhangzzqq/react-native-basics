import React, {Component} from 'react';
import {TextInput, StyleSheet, Alert,Text, View} from 'react-native';

export default class SearchView extends Component {

    constructor(props) {
        super(props);
        this.state = {show: false, value: ''};
    }

    hide(val) {
        this.setState({
            show: false,
            value: val
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.inputStyle}
                        returnKeyType="search"
                        placeholder="请输入关键字"
                        onChangeText={(value) => this.setState({show: true, value: value})}
                        value={this.state.value}/>
                    <View style={styles.btnStyle}>
                        <Text style={styles.search} onPress={()=>alert(this.state.value)}>搜索</Text>
                    </View>
                </View>
                {this.state.show ?
                    <View style={[styles.resultStyle]}>
                        <Text onPress={this.hide.bind(this, this.state.value + '街')}
                              style={styles.itemStyle} numberOfLines={1}>{this.state.value}街</Text>
                        <Text onPress={this.hide.bind(this, this.state.value + '道路')}
                              style={styles.itemStyle} numberOfLines={1}>{this.state.value}道路</Text>
                        <Text onPress={this.hide.bind(this, 80 + this.state.value + '车站')}
                              style={styles.itemStyle} numberOfLines={1}>80{this.state.value}车站</Text>
                    </View>
                    : null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingTop: 25
    },
    searchContainer: {
        height: 45,
        flexDirection: 'row'
    },
    inputStyle: {
        height: 45,
        flex: 1,
        marginTop: 20,
        borderWidth: 1,
        marginLeft: 10,
        paddingLeft: 5,
        borderColor: '#ccc',
        borderRadius: 5
    },
    btnStyle: {
        width: 80,
        marginTop: 20,
        marginLeft: -5,
        marginRight: 10,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: '#23BEFF',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    resultStyle: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        height: 200,
        borderColor: '#ccc',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    itemStyle: {
        fontSize: 16,
        padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderTopWidth: 0,
    }
});
