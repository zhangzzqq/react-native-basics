import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';

export default class Rate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    componentWillReceiveProps(props) {
        const {value} = props;
        if (value !== this.state.value) {
            this.setState({
                value
            });
        }
    }

    static propTypes = {
        value: PropTypes.number,
        size: PropTypes.number,
        margin: PropTypes.number,
        max: PropTypes.number,
        color: PropTypes.string,
        onPress: PropTypes.func
    }

    static defaultProps = {
        value: 0,
        size: 20,
        margin: 5,
        max: 5,
        color: '#00b600'
    }

    bindClick = (index) => {
        const {onPress} = this.props;
        if (!onPress) {
            return;
        }
        onPress(index + 1);
        this.setState({
            value: index + 1
        })
    }

    render() {
        const {size, margin, max, color,onPress} = this.props;
        const {value} = this.state;
        const dStars = [], aStars = [];
        for (let i = 0; i < max; i++) {
            dStars.push(<Icon name='star' key={i} size={size} color='#ececec' onPress={() => this.bindClick(i)}
                              style={{marginRight: margin}}/>)
        }
        for (let i = 0; i < value; i++) {
            aStars.push(<Icon name='star' key={i} size={size} color={color} onPress={() => this.bindClick(i)}
                              style={{marginRight: margin}}/>)
        }
        //选中状态的星星的宽度
        const aWidth = (size + margin) * Math.floor(value) + size * (value - Math.floor(value));
        return (
            <View style={styles.rate}>
                <View style={[styles.stars, styles.active, {width: aWidth}]}>
                    {aStars.map(item => item)}
                </View>
                <View style={styles.stars}>
                    {dStars.map(item => item)}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rates: {
        flexDirection: 'row',
        position: 'relative'
    },
    stars: {
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        flexGrow: 0
    },
    active: {
        position: 'absolute',
        zIndex: 200,
        left: 0,
        top: 0
    }
});
