import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.exampleContainer}>
                    <Example>
                        <CenteredText>A</CenteredText>
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
        alignItems: 'flex-start',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        marginTop: 25
    },
    exampleContainer: {
        borderWidth: 1,
        width: 100,
        height: 120,
        marginLeft: 20,
        marginRight:20,
        marginBottom: 20,
        justifyContent:'center',
        alignItems:'center'
    },
    example: {
        width: 50,
        height: 50,
        backgroundColor: 'grey',
        borderWidth: 1,
        justifyContent: 'center'
    },
    centeredText: {
        textAlign: 'center',
        margin: 10
    }
});