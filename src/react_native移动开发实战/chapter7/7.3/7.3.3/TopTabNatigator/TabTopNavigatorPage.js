// import React, {PureComponent} from 'react';
// import {StyleSheet, View,Dimensions} from 'react-native';
// import {createAppContainer, createMaterialTopTabNavigator} from 'react-navigation'
//
// import Home from './tab/HomePage'
// import Mine from './tab/MinePage'
//
// const TopTabNavigator = createMaterialTopTabNavigator(
//     {
//         Home: {
//             screen: Home,
//             navigationOptions: () => ({
//                 tabBarLabel: '首页',
//             }),
//         },
//         Mine: {
//             screen: Mine,
//             navigationOptions: () => ({
//                 tabBarLabel: '我的',
//             })
//         }
//     }, {
//         initialRouteName: 'Home',
//         tabBarPosition: 'top',
//
//         tabBarOptions: {
//             activeTintColor: 'red',
//             inactiveTintColor:'black',
//             safeAreaInset: 'bottom',
//             style: {
//                 backgroundColor: '#fff',
//             },
//             indicatorStyle:{
//                 backgroundColor:'red',
//                 height:1,
//             }
//         }
//     }
// );
//
// const AppContainer = createAppContainer(TopTabNavigator);
//
// export default class TabTopNavigatorPage extends PureComponent {
//
//     render() {
//         return (
//             <View style={styles.container}>
//             <AppContainer/>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop:44,
//         backgroundColor: "#f3f3f3"
//     },
//     iconStyle: {
//         width:25,
//         height:25
//     }
// });
