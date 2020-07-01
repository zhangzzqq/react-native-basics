import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import ViewPager from '@react-native-community/viewpager';

export default class ViewPagerAndroidPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
        };
    }

    onPageSelected = (e) => {
        this.setState({page: e.nativeEvent.position});
    };

    render() {
        let images = [
            'http://doc.zwwill.com/yanxuan/imgs/banner-1.jpg',
            'http://doc.zwwill.com/yanxuan/imgs/banner-2.jpg',
            'http://doc.zwwill.com/yanxuan/imgs/banner-3.jpg'
        ];
        let pageViews = [];
        for (let i = 0; i < images.length; i++) {
            pageViews.push(
                <Image
                    style={styles.imageStyle}
                    source={{uri: images[i]}}>
                </Image>
            );
        }
        return (
            <View style={styles.container}>
                <ViewPager style={styles.viewPagerStyle}
                                  onPageSelected={this.onPageSelected}>
                    {pageViews}
                </ViewPager>
                <Text style={styles.txtStyle}>当前第{this.state.page + 1}页</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    imageStyle: {
        height: 180,
        padding: 20,
    },
    viewPagerStyle: {
        height: 180,
    },
    txtStyle: {
        flex: 1,
        textAlign: 'center',
        marginTop: 10
    },
});
