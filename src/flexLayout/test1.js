import React from 'react';
import { View ,Text} from 'react-native';

/**
 *  flex百分比布局 ，要求父控件和子控件都要设置flex
 */
const FixedDimensionsBasics = () => {
    return (
      <View style={{flexDirection:'column',flex:1,flexWrap:'nowrap',justifyContent:'center',alignItems:'stretch'}}>
            <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'powderblue',alignItems:'stretch',alignSelf:'center',flex:1}} >
<Text style={{fontSize:22,justifyContent:'flex-start',alignItems:'stretch',flex:1}}>123</Text>

        </View>
      
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
};

export default FixedDimensionsBasics;