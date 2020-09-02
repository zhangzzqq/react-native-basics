import React from 'react';
import { View } from 'react-native';
/**
 * 等比例布局
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
                width: 50, height: 50, backgroundColor: 'powderblue', alignSelf: 'auto',flex: 1

            }} />

            <View style={{ width: 50, height: 50, backgroundColor: 'skyblue', alignSelf: 'flex-start', flex: 1 }} />

            <View style={{
                width: 100, height: 50, backgroundColor: 'steelblue'
                , alignSelf: 'baseline', flex: 1
            }} />


        </View>
    );
};

export default AlignItemsBasics;