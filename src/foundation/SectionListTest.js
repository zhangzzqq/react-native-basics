import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import {useDarkMode} from 'react-native-dark-mode';
import { initialMode } from 'react-native-dark-mode'

export default class SectionListBasics extends Component {
    render() {
        // let isDarkMode = useDarkMode();
        // console.log('isDarkMode=='+isDarkMode);
        console.log('-----------------')
        console.log('App2 started in', initialMode, 'mode')
        console.log('-----------------')
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
