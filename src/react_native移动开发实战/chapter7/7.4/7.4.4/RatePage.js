import React, {PureComponent} from 'react';
import {View, SafeAreaView, StyleSheet, Text, TextInput, Dimensions} from 'react-native';
import Rate from './Rate'

const {height, width} = Dimensions.get("window");

export default class RatePage extends PureComponent {

    static navigationOptions = {
        headerTitle: '电影评分',
    };

    constructor(props) {
        super(props);
        this.state = {
            rate1: '差',
            rate2: '差',
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.titleTxt}>我的评分</Text>
                <View style={styles.rateContainer}>
                    <Text style={styles.rateTxt}>服务评分</Text>
                    <Rate style={styles.rate} color='#f23859' onPress={(value) => {
                        if (value <= 3) {
                            this.setState({
                                rate1: '差'
                            })
                        }else {
                            this.setState({
                                rate1: '好'
                            })
                        }
                    }}/>
                    <Text style={[styles.rateTxt, {marginLeft: 10}]}>{this.state.rate1}</Text>
                </View>
                <View style={styles.rateContainer}>
                    <Text style={styles.rateTxt}>物流评分</Text>
                    <Rate style={styles.rate} color='#f23859' onPress={(value) => {
                        if (value <= 3) {
                            this.setState({
                                rate2: '差'
                            })
                        }else {
                            this.setState({
                                rate2: '好'
                            })
                        }
                    }}/>
                    <Text style={[styles.rateTxt, {marginLeft: 10}]}>{this.state.rate2}</Text>
                </View>

                <View style={styles.line}/>
                <TextInput style={styles.prices} placeholder={'请输入你的评价'} placeholderTextColor={'#b2b2b2'}/>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    rateContainer: {
        flexDirection: "row",
        alignItems: 'center',
        paddingLeft: 10,
        paddingTop:5
    },
    titleTxt: {
        fontSize: 16,
        color: "#666",
        marginTop:10,
        marginLeft:10
    },
    rateTxt: {
        fontSize: 14,
        color: "#999",
        marginRight:5
    },
    rate: {
        alignItems: 'center',
        marginLeft: 15
    },
    line: {
        width: width,
        marginLeft: 15,
        marginTop:10,
        height: 1,
        backgroundColor: '#cdcdcd',
    },
    prices: {
        width: width,
        margin: 10,
        backgroundColor: '#ffffff',
    },
});
