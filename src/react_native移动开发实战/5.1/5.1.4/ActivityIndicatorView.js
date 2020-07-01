import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Image,
    Dimensions,
    ActivityIndicator,
    StatusBar
} from 'react-native';



let {width, height} = Dimensions.get("window");

export default class ActivityIndicatorView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animating: true,
        };
    }

    render() {
        let image=require('../src/image/splash.png');

        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <Image style={styles.splash} source={image}/>
                <ActivityIndicator
                    animating={this.state.animating}
                    style={[styles.centering, {height: 70}]}
                    size="large" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    splash: {
        width: width,
        height: height,
    },
    centering: {
        flex: 1,
        marginTop:-height,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },

});
