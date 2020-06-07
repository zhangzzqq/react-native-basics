import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
              
                <View style={styles.exampleContainer}>
                    <Example style={{paddingTop:35 ,}}>
                        <CenteredText>B</CenteredText>
                    </Example>
                    
                </View>
                <View style={styles.exampleContainer}>
                    <Example style={{paddingTop:35 ,}}>
                        <CenteredText>B</CenteredText>
                    </Example>
                    
                </View>
                <View style={styles.exampleContainer}>
                    <Example style={{paddingTop:35 ,}}>
                        <CenteredText>B</CenteredText>
                    </Example>
                    
                </View>
                <View style={styles.exampleContainer}>
                    <Example style={{paddingTop:35 ,}}>
                        <CenteredText>B</CenteredText>
                    </Example>
                    
                </View>
                <View style={styles.exampleContainer}>
                    <Example style={{paddingTop:35 ,}}>
                        <CenteredText>B</CenteredText>
                    </Example>
                    
                </View>

            </View>
        );
    }
}

const Example = (props) => (
    <View style={[styles.example,props.style]}>
        {props.children}
    </View>
);

const CenteredText = (props) => (
    <Text style={[styles.centeredText, props.style]}>
        {props.children}
    </Text>
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        marginTop: 75,
        backgroundColor:'#0f0'
    },
    exampleContainer: {
        borderWidth: 1,
        width: 120,
        height: 120,
        marginLeft: 10,
        marginBottom: 20,
        justifyContent:'center',
        alignItems:'center',
    },
    example: {
        width: 50,
        height: 50,
        flexDirection:'column',
        backgroundColor: 'grey',
        borderWidth: 1,
        alignItems:'center',
        justifyContent: 'center'
    },
    centeredText: {
        textAlign: 'center',
        margin: 10,
        borderWidth: 1,
        backgroundColor: 'lightgrey'
    }
});