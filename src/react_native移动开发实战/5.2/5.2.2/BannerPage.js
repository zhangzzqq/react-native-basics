import React, {Component} from 'react';
import {Image, StyleSheet, ScrollView, Text, View, Dimensions} from 'react-native';
import data from './data/banner'

const screenWidth = Dimensions.get('window').width;


export default class BannerPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0
        };
    }

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    renderItem() {
        return data.data.map((item, i) => {
            return <Image key={`item${i}`} source={{uri: item.image}} style={styles.imageStyle}/>;
        });
    }

    renderIndicator() {
        return data.data.map((item, i) => {
            let style = {};
            //选中指示器颜色
            if (i === this.state.currentPage) {
                style = {color: 'orange'};
            }
            return <Text key={`text${i}`} style={[styles.circleStyle, style]}>•</Text>
        });
    }

    handleScroll = (e) => {
        let x = e.nativeEvent.contentOffset.x;
        let currentPage = Math.floor( x / screenWidth);
        this.setState({currentPage: currentPage});
    };

    startTimer() {
        this.timer = setInterval(() => {
            let currentPage = ++this.state.currentPage === data.data.length ? 0 : this.state.currentPage;
            this.setState({currentPage: currentPage});
            let offsetX = currentPage * screenWidth;
            this.refs.scrollView.scrollTo({x: offsetX, y: 0, animated: true});
        }, 3000);
    }

    handleScrollBegin() {
        clearInterval(this.timer);
    }

    handleScrollEnd() {
        this.startTimer();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.scrollStyle}>
                    <ScrollView
                        ref="scrollView"
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={true}
                        onMomentumScrollEnd={this.handleScroll}
                        onScrollBeginDrag={this.handleScrollBegin()}
                        onScrollEndDrag={this.handleScrollEnd()}>
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
        justifyContent:'center',
        bottom: 0,
        left: 10,
        top:-25,
    },
    circleStyle: {
        fontSize: 25,
        color: '#FF3030'
    }
};

