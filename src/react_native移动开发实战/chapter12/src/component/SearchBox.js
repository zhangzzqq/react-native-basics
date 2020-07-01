import React, {PureComponent} from 'react';
import {View, TextInput, StyleSheet, Platform, Image, Text, TouchableOpacity, Dimensions,} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class SearchBox extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    onChangeTextKeyword(value) {
        console.log(value)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <View style={styles.inputBox}>
                        <Image style={styles.iconStyle} source={require('../images/icon_search.png')}/>
                        <TextInput style={styles.inputText}
                                   ref="keyword" value={this.props.keyword}
                                   onChangeText={this.onChangeTextKeyword.bind(this)}
                                   returnKeyType="search" maxLength={20}
                                   underlineColorAndroid="transparent"
                                   placeholder={'搜影片、影院、演出、视频、资讯'}/>
                    </View>
                    <TouchableOpacity style={styles.cancleStyle} onPress={() => {
                        this.props.onSearchCancel()
                    }}>
                        <Text style={styles.cancleTxt}>取消</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    inputBox: {
        width: width * 0.75,
        height:38,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: '#E6E7E8'
    },
    iconStyle: {
        width: 18,
        height: 18,
        alignSelf: 'center',
        alignItems:'center'
    },
    inputText: {
        alignSelf: 'flex-end',
        height:38,
        marginLeft: 5,
        marginRight: 5,
        lineHeight: 38,
        textAlignVertical: 'bottom',
        textDecorationLine: 'none'
    },
    cancleStyle: {
        justifyContent: 'center'
    },
    cancleTxt: {
        fontSize: 18,
    },
});
