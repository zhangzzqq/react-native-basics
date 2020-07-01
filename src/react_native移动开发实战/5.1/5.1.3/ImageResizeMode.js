import React, {Component} from 'react';
import {Platform, StyleSheet, Image, Text,View} from 'react-native';

export default class ImageResizeMode extends Component {

    render() {
        let imageSource=require('../src/image/react.jpg');

        return (
            <View style={styles.container}>
                <Image style={[styles.image,{resizeMode:'cover'}]}
                       source={imageSource}/>
                <Text style={styles.text}>cover</Text>

                <Image style={[styles.image,{resizeMode:'contain'}]}
                       source={imageSource}/>
                <Text style={styles.text}>contain</Text>

                <Image style={[styles.image,{resizeMode:'stretch'}]}
                       source={imageSource}/>
                <Text style={styles.text}>stretch</Text>

                <Image style={[styles.image,{resizeMode:'repeat'}]}
                       source={imageSource}/>
                <Text style={styles.text}>repeat</Text>

                <Image style={[styles.image,{resizeMode:'center'}]}
                       source={imageSource}/>
                <Text style={styles.text}>center</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    image: {
        width: 140,
        height: 110,
        backgroundColor: 'red'
    },
    text: {
        justifyContent: 'center',
        fontSize:24
    }
});
