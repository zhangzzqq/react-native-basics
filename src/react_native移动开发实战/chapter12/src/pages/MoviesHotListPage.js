import React, {PureComponent} from 'react';
import {View, FlatList, Text, ActivityIndicator, RefreshControl, StyleSheet} from 'react-native';
import {fetchHotMovies} from '../api/Service';
import MovieItemCell from "../component/MovieItemCell";

type Props = {};
export default class MoviesHotListPage extends PureComponent<Props> {

    constructor(props) {
        super(props);
        this.state = {
            movieList: [],
            loaded: false,
            isRefreshing: false
        };
    }

    componentDidMount() {
        this.getHotMovies();
    }

    render() {
        if (!this.state.loaded) {
            return (
                <View style={styles.loadingView}>
                    <ActivityIndicator animating={true} size="small"/>
                    <Text style={{color: '#666666', paddingLeft: 10}}>努力加载中</Text>
                </View>
            )
        }
        return (
            <FlatList
                data={this.state.movieList}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.id}/>
        )
    }

    renderItem = (item) => {
        return (
            <MovieItemCell movie={item.item}
                           onItemPress={() => {
                               this.props.navigation.navigate('DetailPage', {
                                   id: item.item.id
                               });
                               alert('itme')
                               console.log(item.item.id);
                           }}/>
        )
    };

    getHotMovies() {
        let that = this;
        fetch(fetchHotMovies())
            .then((response) => response.json()).then((json) => {
            let movies = [];
            for (let idx in json.subjects) {
                let movieItem = json.subjects[idx];
                let directors = ""; // 导演
                for (let index in movieItem.directors) {
                    // 得到每一条电影的数据
                    let director = movieItem.directors[index];
                    // 将多个导演的名字用空格分隔开显示
                    if (directors === "") {
                        directors = directors + director.name
                    } else {
                        directors = directors + " " + director.name
                    }
                }
                movieItem["directorNames"] = directors;
                // 拼装主演的演员名字，多个名字用空格分隔显示
                let actors = "";
                for (let index in movieItem.casts) {
                    let actor = movieItem.casts[index];
                    if (actors === "") {
                        actors = actors + actor.name
                    } else {
                        actors = actors + " " + actor.name
                    }
                }
                movieItem["actorNames"] = actors;
                movies.push(movieItem)
            }
            that.setState({
                movieList: movies,
                loaded: true
            })
        }).catch((e) => {
            console.log("加载失败");
            that.setState({
                loaded: true
            })
        }).done();
    }
}

const styles = StyleSheet.create({
    loadingView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
});
