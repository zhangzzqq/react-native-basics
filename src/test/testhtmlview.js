import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';
import HTMLView from 'react-native-htmlview';
const runes = require('runes');

export default  class test extends React.Component {
    render() {
        let htmlContent = '<em>拒绝</em> <b>百度</b> <br>从我做起';
       let  splitText = runes.substr(htmlContent, 0, 2);  //"A🇺🇸"
        return (
            <View  style={styles.container}>
                {/*<Text style={styles.text}>*/}
                {/*    <HTMLView value={htmlContent}/>*/}
                {/*</Text>*/}
                <HTMLView value={htmlContent}/>

                <Button title={splitText } />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:100,
        backgroundColor: '#Ff0',
    },
    text: {
        color:'#00f',
        backgroundColor: '#Ff0',
    },
    containerSon: {
        flex: 1,
        paddingTop:100,
        backgroundColor: '#Ff0',
        alignItems:'flex-end'
    },
    view_one: {
        height: 150,
        width: 150,
        fontSize: 28,
        backgroundColor: 'blue',
    },
    view_two: {
        height: 150,
        width: 150,
        fontSize: 28,
        backgroundColor: 'red',
        alignSelf:'flex-start'

    },


});

