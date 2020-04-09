import React, {Component} from 'react';
import {View} from 'react-native';
import SortButton from './SortButton';
import VisibleTodoList from '../containers/VisibleTodoList';
import AddTodo from '../containers/AddTodo';

export default class Group extends Component {

    render() {
        return (<View style= {{paddingHorizontal: 20, paddingVertical: 44}} >
                <AddTodo/>
                <SortButton/>
                <VisibleTodoList/>
            </View>
        );
    }
}
