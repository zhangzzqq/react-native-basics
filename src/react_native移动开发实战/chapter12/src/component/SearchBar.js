import React, {Component} from 'react';
import {View, Dimensions, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.headerStyle}>
                <TouchableOpacity style={styles.action} onPress={() => {
                    this.props.onPressCity();
                }}>
                    <Text style={styles.cityText}>上海</Text>
                    <Image style={styles.cityArrow}
                        source={require('../images/arrow_down.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchBar} onPress={() => {
                    this.props.onPressSearch();
                }}>
                    <Image style={styles.iconStyle} source={require('../images/icon_search.png')} />
                    <Text style={styles.searchTxt}>搜影片、影院、演出、视频、资讯</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#ffffff",
        height: 52,
        width:width,
        paddingHorizontal: 16,
        flexDirection: 'row',
    },
    searchBar: {
        width: width * 0.7,
        height: 38,
        borderRadius: 3,
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        alignSelf: 'center',
        paddingLeft: 10,
    },
    cityText: {
        fontSize: 18,
        justifyContent: 'center',
    },
    cityArrow: {
        width:8,
        height:8,
        marginLeft:3,
        justifyContent: 'center',
    },
    iconStyle: {
        width: 22,
        height: 22,
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchTxt: {
        fontSize: 13,
        color: "#666",
        marginLeft: 5
    },
});

