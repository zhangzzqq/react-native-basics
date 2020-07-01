import {createAppContainer} from 'react-navigation';
import MoviesHotListPage from '../pages/MoviesHotListPage'
import MoviesShinePage from '../pages/MoviesShinePage'
import {Dimensions} from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const {width, height} = Dimensions.get('window');
const Tab = createMaterialTopTabNavigator();

const tabNavigation = createMaterialTopTabNavigator({
        MoviesListPage: {
            screen: MoviesHotListPage,
            navigationOptions:  {
                tabBarLabel: '正在热映',
                // navigation:this.props.navigation,
            }
        },
        MinePage: {
            screen: MoviesShinePage,
            navigationOptions: {
                tabBarLabel: '即将上映',
            }
        },
    }, {
        tabBarPosition: 'top',       //标签栏在屏幕顶部还是底部
        swipeEnabled: true,           //是否可以滑动切换标签
        animationEnabled: true,      //标签切换是否有动画效果
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#D52C43',
            inactiveTintColor: '#808080',
            labelStyle: {fontSize: 16},
            indicatorStyle: {height: 2, backgroundColor: '#D52C43', width: width / 2 - 120, marginLeft: width / 2 - 130},
            inactiveBackgroundColor: 'white',
            style: {backgroundColor: '#ffffff', height: 52},
        }
    }
)
const AppContainer = createAppContainer(tabNavigation);
export default AppContainer;
