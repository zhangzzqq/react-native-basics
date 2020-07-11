/**
 * 手势Scroll动画
 */
import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Animated, Image, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default class AnimatedScroll extends Component {

    state: {
        xOffset: Animated,
    };

    constructor(props) {
        super(props);
        this.state = {
            xOffset: new Animated.Value(1.0)
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={styles.imageStyle}
                            onScroll={Animated.event(
                                [{nativeEvent: {contentOffset: {x: this.state.xOffset}}}]
                            )}
                            scrollEventThrottle={100}>
                    <Animated.Image source={{uri: 'http://doc.zwwill.com/yanxuan/imgs/banner-1.jpg'}}
                                    style={[styles.imageStyle, {
                                        opacity: this.state.xOffset.interpolate({
                                            inputRange: [0, 375],
                                            outputRange: [1.0, 0.0]
                                        }),
                                    }]}
                                    resizeMode="cover"/>
                    <Image source={{uri: 'http://doc.zwwill.com/yanxuan/imgs/banner-2.jpg'}} style={styles.imageStyle}
                           resizeMode="cover"/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 44,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },
    imageStyle: {
        height: 200,
        width: width
    },
});
