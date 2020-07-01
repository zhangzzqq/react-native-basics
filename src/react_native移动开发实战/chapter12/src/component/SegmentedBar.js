import React, {Component} from 'react';
import {View, Dimensions, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import SegmentedControlTab from "../component/SegmentedTab";

const {width, height} = Dimensions.get('window');

export default class SegmentedBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            segmentdata:['电影', '影院'],
            selectedIndex: 0,
        }
    }

    handleSingleIndexSelect = (index: number) => {
        this.setState(prevState => ({...prevState, selectedIndex: index}))
        this.props.onPressSegmented(index);
    }

    render() {
        return (
            <View style={styles.headerStyle}>
                <TouchableOpacity style={styles.cityContainer} onPress={() => {
                    this.props.onPressCity();
                }}>
                    <Text style={styles.cityText}>上海</Text>
                    <Image style={styles.cityArrow}
                           source={require('../images/arrow_down.png')}/>
                </TouchableOpacity>

                <View style={styles.tabFlex}>
                <View style={styles.tabContainer}>
                    <SegmentedControlTab
                        tabStyle={styles.tabStyle}
                        tabTextStyle={styles.tabTextStyle}
                        activeTabStyle={styles.activeTabStyle}
                        values={this.state.segmentdata}
                        selectedIndex={this.state.selectedIndex}
                        onTabPress={this.handleSingleIndexSelect}
                    />
                </View>
                </View>
                <TouchableOpacity style={styles.cityContainer} onPress={() => {
                    this.props.onPressSearch();
                }}>
                <Image style={styles.iconStyle} source={require('../images/icon_search.png')} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#ffffff",
        height: 52,
        width: width,
        paddingHorizontal: 16,
        flexDirection: 'row',
    },
    cityContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cityText: {
        fontSize: 16,
        justifyContent: 'center',
    },
    cityArrow: {
        width:8,
        height:8,
        marginLeft:3,
        justifyContent: 'center',
    },
    tabFlex: {
        flex:1,
        justifyContent:'center'
    },
    tabContainer: {
        width: 120,
        height: 42,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    tabStyle: {
        borderColor: '#D52C43',
    },
    activeTabStyle: {
        backgroundColor: '#D52C43',
    },
    tabTextStyle: {
        color: '#D52C43',
    },
    iconStyle: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignSelf: 'center'
    },
});

