import React, {Component} from 'react';
import {View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {sliderWidth, itemWidth} from './SliderEntry.style';
import SliderEntry from './SliderEntry';
import styles from './index.style';
import {ENTRIES1} from './entries';

const SLIDER_DEFAULT_ITEM = 1;

export default class CarouselPaginationPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_DEFAULT_ITEM
        };
    }

    _renderItemWithParallax({item, index}, parallaxProps) {
        return (
            <SliderEntry
                data={item}
                even={(index + 1) % 2 === 0}
                parallax={true}
                parallaxProps={parallaxProps}/>
        );
    }

    mainExample() {
        return (
            <View style={styles.exampleContainer}>
                <Carousel
                    data={ENTRIES1}
                    renderItem={this._renderItemWithParallax}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    firstItem={SLIDER_DEFAULT_ITEM}
                    inactiveSlideScale={0.94}
                    inactiveSlideOpacity={0.7}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    loop={true}
                    loopClonesPerSide={2}
                    autoplay={true}
                    autoplayDelay={500}
                    autoplayInterval={3000}/>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.mainExample()}
            </View>
        );
    }
}
