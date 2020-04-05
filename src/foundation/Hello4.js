import React, { useState } from "react";
import {Button, SafeAreaView, Text, View} from 'react-native';


export default  function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <SafeAreaView>
        <View>
            <Text>You clicked {count} times</Text>

            <Button
                onPress={() => setCount(count + 1)}
                title="toast button">
            </Button>

        </View>
            </SafeAreaView>
    );
}

