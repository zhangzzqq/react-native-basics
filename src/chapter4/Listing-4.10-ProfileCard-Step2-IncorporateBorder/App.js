import React, { Component } from 'react';
import { Image, StyleSheet, View} from 'react-native';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image style={styles.cardImage} source={require('../image/user.png')}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400,
        alignItems:'center',
    },
    cardImageContainer: {
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        alignItems:'center',
        justifyContent: 'center',
    },
    cardImage: {
        width: 80,
        height: 80
    }
});