import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class Flex extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.view_one}>视图1</Text>
                <Text style={styles.view_two}>视图2</Text>

                <Text >12</Text>
                <Text >{a}</Text>
                <Text >{hello}</Text>
            </View>
        );
    }
}



let a = ()=>{
    return ( 1+1);

}
const hello = () => (
    <div>
        <h2>Draft</h2>
    </div>
);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        backgroundColor: '#F5FCFF',
        flexDirection:'column'
    },
    view_one: {
        height: 150,
        width: 150,
        fontSize: 28,
        backgroundColor: 'blue',
        flex: 1
    },
    view_two: {
        height: 150,
        width: 150,
        fontSize: 28,
        backgroundColor: 'red',
        flex: 1
    }
});
