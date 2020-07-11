import {createAppContainer,createStackNavigator} from 'react-navigation';

import MainPage from './MainPage'
import DetailPage from "./DetailPage";

const AppNavigator = createStackNavigator({
    MainPage: MainPage,
    DetailPage:DetailPage
    },
    {
        initialRouteName: "MainPage",
        mode:'modal'
    },
    {

    }
);
export default createAppContainer(AppNavigator);
