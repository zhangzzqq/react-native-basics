import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {NOTICES} from './data/entries';

let {width} = Dimensions.get('window');

export default class CarouselVerticalPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            entries: NOTICES
        };
    }

    _renderItem({item, index}) {
        return (
            <View style={styles.carView} key={`entry-${index}`} numberOfLines={1}>
                <Text style={styles.textStyle}>{`银行卡${item.bankeNo}尾号，已放款${
                    item.mony}元`}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.imageStyle}
                       source={require('./images/notice.png')}/>
                <Carousel
                    data={this.state.entries}
                    renderItem={this._renderItem}
                    sliderWidth={width - 30}
                    sliderHeight={44}
                    itemHeight={44}
                    itemWidth={width - 30}
                    vertical={true}
                    activeSlideOffset={0}
                    autoplay={true}
                    loop={true}
                    autoplayDelay={500}
                    autoplayInterval={3000}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:100,
        height: 40,
        width:width-40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 2,
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center'
    },
    imageStyle: {
        height: 25,
        width:25,
        marginLeft: 10,
        alignItems:'center',
    },
    carView: {
        // backgroundColor:'red',
        marginTop: 12,
    },
    textStyle: {
        fontSize: 16,
        fontWeight:'bold',
        color:'gray',
        textAlign:'center',
        textAlignVertical:'center',
    },
});
