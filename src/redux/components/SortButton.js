import React, {Component} from 'react';
import {visibilityFilters} from '../global';
import SortButtonDetail from '../containers/SortButtonDetail';
import {View} from 'react-native';

const {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} = visibilityFilters;


export default class SortButton extends Component {
    render() {
        return (

            <View style={{flexDirection: 'row', marginTop: 80}}>
                <SortButtonDetail filter={SHOW_ALL}/>
                <SortButtonDetail filter={SHOW_COMPLETED}/>
                <SortButtonDetail filter={SHOW_ACTIVE}/>
            </View>);
    }
}
