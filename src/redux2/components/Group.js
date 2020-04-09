import React, {Component} from 'react';
import {View}  from 'react-native'
import SortButton from '../../redux2/components/SortButton';
import VisibleTodoList from '../../redux2/containers/VisibleTodoList';
import AddTodo from '../../redux2/containers/AddTodo';


export default class Group extends Component{

    render(){
        return(<View style={{paddingHorizontal: 20, paddingVertical: 44}}>
            <AddTodo/>
            <SortButton/>
            <VisibleTodoList/>
        </View>)

    }

}
