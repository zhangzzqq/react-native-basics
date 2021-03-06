
import React, {Component} from 'react';
import {visibilityFilters} from '../global';
import {View} from 'react-native';
import FilterLink from '../containers/SortButtonDetails';
const {SHOW_ALL,SHOW_COMPLETED,SHOW_ACTIVE} =visibilityFilters

export default class SortButton extends Component{

    render(){
        return(
            <View style={{flexDirection: 'row', marginTop: 80}}>
                <FilterLink filter={SHOW_ALL}/>
                <FilterLink filter={SHOW_COMPLETED}/>
                <FilterLink filter={SHOW_ACTIVE}/>
            </View>
        );
    }

}
