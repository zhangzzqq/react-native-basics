import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <View style={{alignItems: 'center',margin:20,}}>
                <Text>Hello {this.props.name} {this.props.children} {this.props.son}!</Text>
            </View>
        );
    }
}

export default class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{alignItems: 'center', top: 50}}>
                <Greeting name='Rexxar' children={'test'}  son={'xiaoming'} />
                <Greeting name='Jaina' />
                <Greeting name='Valeera' />
                <Greeting name='Valeera2' />
            </View>
        );
    }
}
