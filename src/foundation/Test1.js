import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            test:123232,
            person:"xiaoming",




        };
        return (
            <Image source={pic} style={{width: 193, height: 190}}/>
        );
    }
}
