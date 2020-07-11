import React, {Component} from 'react';
import {View, FlatList, Dimensions, Text, ActivityIndicator, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {queryMovies} from './Service';
import MovieItemCell from "./MovieItemCell";

export const width = Dimensions.get('window').width;

export default class FlatListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieList: [],
            loaded: false,
        };
    }

    componentDidMount() {
        this.loadDisplayingMovies();
    }

    renderTitle() {
        return (
            <View style={styles.bayStyle}>
                <Text style={styles.txtStyle}>
                    电影列表
                </Text>
            </View>);
    }

    renderLoad() {
        if (!this.state.loaded) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator animating={true} size="small"/>
                    <Text style={{color: '#666666', paddingLeft: 10}}>努力加载中</Text>
                </View>
            )
        }
    }

    renderList() {
        return (<FlatList
            data={this.state.movieList}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
            ListFooterComponent={this.renderFooter}
            ListHeaderComponent={this.renderHeader}

        />)
    }

    render() {
        return (
            <SafeAreaView style={styles.flex} >
                {this.renderTitle()}
                {this.renderLoad()}
                {this.renderList()}
            </SafeAreaView>
        )
    }

    renderItem(item) {
        return (
            <MovieItemCell movie={item.item} onPress={() => {
                alert('点击电影:' + item.item.title)
            }}/>
        )
    };

    //加载正在上映的电影列表
    loadDisplayingMovies() {
        let that = this;
        fetch(queryMovies('北京', 0, 20)).then((response) => response.json()).then((json) => {
            console.log(json);
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
                //拼装主演的演员名字，多个名字用空格分隔显示
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


    renderHeader = ()=>{

        return <ActivityIndicator animating size='large'/>
    }

    renderFooter = ()=>{
        if(!this.state.loading) return  null;

        return (
            <View>
                <Text>正在玩命加载中...</Text>
                <ActivityIndicator animating size='large'/>
        </View>
        )
    }

}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        backgroundColor: '#268dcd',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'row',
    },
    bayStyle: {
        height: 48,
        width: width,
        justifyContent: 'center',
        backgroundColor: '#268dcd'
    },
    txtStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18
    },
});


