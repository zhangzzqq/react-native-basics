import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableHighlight} from 'react-native';

export default class App extends Component<{}> {

    constructor(){
        super()
        this._onPressButton = this._onPressButton.bind(this)

    }
    render() {
        return (
            <View style={styles.container}>
                <Example style={{borderRadius: 20}}>
                    <CenteredText>
                        Example 1:{"\n"}4 Rounded Corners
                    </CenteredText>
                </Example>
                <Example style={{borderTopRightRadius: 60,
                                 borderBottomRightRadius: 60}}>
                    <CenteredText>
                        Example 2:{"\n"}D Shape
                    </CenteredText>
                </Example>
                <Example style={{borderTopRadius: 30,
                                 borderBottomRightRadius: 30}}>
                    <CenteredText>
                        Example 3:{"\n"}Leaf Shape
                    </CenteredText>
                </Example>
                <TouchableHighlight onPress={this._onPressButton}>
                <Example style={{borderRadius: 60}}>
                    <CenteredText>
                        Example 4:{"\n"}Circle
                    </CenteredText>
                </Example>
                </TouchableHighlight>
            </View>
        );
    }

    _onPressButton() {
        // console.log("You tapped the button!");
        alert('You tapped the button!')
      }

}

const Example = (props2) => (
    <View style={[styles.example,props2.style]}>
        {props2.children}
    </View>
    
);

const CenteredText = (props) => (
    <Text style={[styles.centeredText, props.style]}>
        {props.children}
    </Text>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 75
    },
    example: {
        width: 120,
        height: 120,
        marginLeft: 20,
        marginBottom: 20,
        backgroundColor: 'grey',
        borderWidth: 2,
        justifyContent: 'center'
    },
    centeredText: {
        textAlign: 'center',
        margin: 10
    }
});