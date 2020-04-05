import React, { Component, useState } from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';

export default function PizzaTranslator() {
    const [text, setText] = useState('');
    return (
        <SafeAreaView>
        <View style={{padding: 10}}>
            <TextInput
                style={{height: 40}}
                placeholder="Type here to translate!"
                onChangeText={text => setText(text)}
                defaultValue={text}
            />
            <Text style={{padding: 10, fontSize: 42}}>
                {text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>
        </View>
        </SafeAreaView>
    );
}
