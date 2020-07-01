import React, {Component} from 'react';
import {Image, StyleSheet, ScrollView, Text, View, Dimensions} from 'react-native';
import data from './data/banner'

const screenWidth = Dimensions.get('window').width;


export default class ScrollViewPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0
        };
    }

    renderItem() {
        return data.data.map((item, i) => {
            return <Image key={`item${i}`} source={{uri: item.image}} style={styles.imageStyle}/>;
        });
    }

    //绘制指示器
    renderIndicator() {
        return data.data.map((item, i) => {
            let style = {};
            if (i === this.state.currentPage) {
                style = {color: 'orange'};
            }
            return <Text key={`text${i}`} style={[styles.circleStyle, style]}>•</Text>
        });
    }

    //处理滚动
    handleScroll= (e) => {
        let x = e.nativeEvent.contentOffset.x;
        let currentPage = Math.floor( x / screenWidth);
        this.setState({currentPage: currentPage});
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.scrollStyle}>
                    <ScrollView
                        ref="scrollView"
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={true}
                        onMomentumScrollEnd={this.handleScroll}>
                        {this.renderItem()}
                    </ScrollView>
                    <View style={styles.indicatorStyle}>
                        {this.renderIndicator()}
                    </View>
                </View>
            </View>);
    }
}

const styles = {
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
    },
    scrollStyle: {
        marginTop: 40
    },
    imageStyle: {
        width: screenWidth,
        height: 200
    },
    indicatorStyle: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 10
    },
    circleStyle: {
        fontSize: 25,
        color: '#FF3030'
    }
};

