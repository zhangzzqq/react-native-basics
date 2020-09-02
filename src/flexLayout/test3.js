import React from 'react';
import { View } from 'react-native';
/**
 * flexGrow扩大和缩小flexShrink 
 */
const AlignItemsBasics = () => {
    return (
        // Try setting `alignItems` to 'flex-start'
        // Try setting `justifyContent` to `flex-end`.
        // Try setting `flexDirection` to `row`.
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
        }}>
            <View style={{
                width: 50, height: 50, backgroundColor: 'powderblue', alignSelf: 'auto',
                flexShrink:0.3,
            }} />

            <View style={{ width: 50, height: 50, backgroundColor: 'skyblue', alignSelf: 'flex-start', }} />

            <View style={{
                width: 100, height: 50, backgroundColor: 'steelblue'
                , alignSelf: 'baseline',
            }} />


        </View>
    );
};

export default AlignItemsBasics;