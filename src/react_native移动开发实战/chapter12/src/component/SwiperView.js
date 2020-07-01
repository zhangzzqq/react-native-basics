import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper'

const {height, width} = Dimensions.get("window");

export default (props) => {
    return (
        <Swiper autoplay={true} loop={true}>
            {
                props.uriList.map((uri, index) => (
                    <View key={index}>
                        <Image
                            source={{uri: `${uri}_720x720Q30.jpg`}}
                            style={styles.img}
                        />
                    </View>
                ))
            }
        </Swiper>
    )
}

const styles = StyleSheet.create({
    img: {
        width: width,
        height: (520 / 1280 * width)
    }
});
