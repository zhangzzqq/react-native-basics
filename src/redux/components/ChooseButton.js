import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    TouchableOpacity,
    Text
} from 'react-native'

export default class ChooseButton extends Component{

    static propTypes = {
        active:PropTypes.bool.isRequired,
        filter:PropTypes.string.isRequired,
        onClick1:PropTypes.func.isRequired,
    }

    render() {
        let { active,  filter, onClick1 } = this.props;
        console.log('------1--------')
        console.log(this.props);
        console.log('------1--------')

        return (
            <TouchableOpacity
                style={{
                    marginLeft: 4,
                    height: 40,
                    flex:1,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    alignItems: 'center',
                    justifyContent:'center'
                }}
                onPress={onClick1}
            >
                <Text style={{fontSize: 10, color: active ? 'black' : '#cccccc'}}>{filter}</Text>
            </TouchableOpacity>
        );
    }
}
