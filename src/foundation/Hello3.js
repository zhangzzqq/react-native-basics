import React, { useState } from "react";
import {Button, SafeAreaView, Text, View} from 'react-native';

function Cat(props) {
    const [isHungry, setIsHungry] = useState(true);


    return (
        <SafeAreaView>
        <View>
            <Text>
                I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
            </Text>
            <Button
                onPress={() => {
                    setIsHungry(false);
                }}
                disabled={!isHungry}
                title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
            />
        </View>
        </SafeAreaView>
    );
}

export default function Cafe() {
    return (
        <>
            <Cat name="Munkustrap" />
            <Cat name="Spot" />
        </>
    );
}
