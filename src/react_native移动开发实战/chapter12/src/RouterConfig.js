import {createAppContainer, createStackNavigator} from 'react-navigation';

import HomePage from './pages/HomePage'
import CityPage from "./pages/CityPage";
import SearchPage from "./pages/SearchPage";
import MoviesPage from "./pages/MoviesPage";
import DetailPage from "./pages/MovieDetailPage";
import VideoPlayPage from "./pages/VideoPlayPage";
import RatePage from "./pages/RatePage";

const AppNavigator = createStackNavigator({
        HomePage: HomePage,
        CityPage: CityPage,
        SearchPage: SearchPage,
        MoviesPage: MoviesPage,
        DetailPage: DetailPage,
        VideoPlayPage: VideoPlayPage,
        RatePage: RatePage
    }, {
        initialRouteName: 'HomePage',
        defaultNavigationOptions: {
            headerBackTitle: null,
        }
    }
);
export default createAppContainer(AppNavigator);
