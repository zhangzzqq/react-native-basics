import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
const Children = props => {
    const { defaultValue } = props; //接收
    const [count, setCount] = useState(defaultValue); //state初始化
    return (
        <View style={{ marginTop: 100 }}>
            <Text>{count}</Text>
            {/*控制自身状态按钮，点击增加1*/}
            <TouchableOpacity onPress={() => setCount(count + 1)}>
                <Text>点击+1</Text>
            </TouchableOpacity>
            {/*传递自身状态值给父组件，接收父组件传递的函数参数运行并将count作为参数传递回去*/}
            {/*<TouchableOpacity onPress={() => props.get(count)}>*/}
            {/*    <Text>获取</Text>*/}
            {/*</TouchableOpacity>*/}
        </View>
    );
};

const Parent = props => {
    // const [value, setValue] = useState(10);
    return (
        <>
            {/*注入参数*/}
            <Children defaultValue={10} get={v => setValue(v)} />
            {/*实时显示获取到的值*/}
            {/*<Text>父组件中获取的count{value}</Text>*/}
        </>
    );
};
export default Parent;
