import React, {PureComponent} from 'react';
import {StyleSheet, SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import SearchBar from '../component/SearchBar'
import MoviesList from '../component/MoviesList'
import SwiperView from '../component/SwiperView'

export default class HomePage extends PureComponent {

    static navigationOptions = {
        header: null,
    };

    renderSearch() {
        return (
            <SearchBar
                onPressCity={() => {
                    this.props.navigation.navigate('CityPage')
                }}
                onPressSearch={() => {
                    this.props.navigation.navigate('SearchPage')
                }}
            />
        );
    }

    renderSwiperView() {

    }

    renderTheaters() {
        return (
            <MoviesList
                title='近期上映'
                url="https://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a"
                navigation={this.props.navigation}
                onPressFn={(id) => {
                    this.props.navigation.navigate('DetailPage', {
                        id: id
                    })
                }}
                onPressMore={() => {
                    this.props.navigation.navigate('MoviesPage')
                }}/>
        );
    }

    renderComingsoon() {
        return (
            <MoviesList
                title="即将上映"
                url="http://api.douban.com/v2/movie/coming_soon?apikey=0df993c66c0c636e29ecbb5344252a4a"
                navigation={this.props.navigation}
                onPressFn={(id) => {
                    this.props.navigation.navigate('DetailPage', {
                        id: id
                    })
                }}/>
        );
    }

    renderRecommend() {
        return (
            <MoviesList
                title="推荐电影"
                url="http://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a"
                navigation={this.props.navigation}
                onPressFn={(id) => {
                    this.props.navigation.navigate('DetailPage', {
                        id: id
                    })
                }}/>
        );
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this.renderSearch()}
                <ScrollView>
                    {this.renderSwiperView()}
                    {this.renderTheaters()}
                    {this.renderComingsoon()}
                    {this.renderRecommend()}
                </ScrollView>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
