import React, {Component} from 'react';
import {View, SectionList, Text, ActivityIndicator, StyleSheet, SafeAreaView, FlatList, Dimensions} from 'react-native';
import {queryMovies, comingMovies} from './Service';
import MovieItemCell from "./MovieItemCell";

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export default class SectionListPage extends Component {

    static navigationOptions = {
        headerTitle: '豆瓣电影'
    };

    constructor(props) {
        super(props);
        this.state = {
            displayingMovies: [],  // 正在上映的电影数据
            incomingMovies: [],    // 即将上映的电影数据
            sectionData: [],      // SectionList数据源
            loaded: false,     //用来控制loading视图
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
        return (
            <SectionList
                keyExtractor={this.keyExtractor}
                renderSectionHeader={this.renderSectionHeader}
                renderItem={this.renderItem}
                sections={this.state.sectionData}
            />)
    }


    render() {
        return (
            <SafeAreaView style={styles.flex}>
                {this.renderTitle()}
                {this.renderLoad()}
                {this.renderList()}
            </SafeAreaView>
        )
    }

    keyExtractor(item) {
        item.id;
    }

    renderSectionHeader(item) {
        let sectionObj = item.section;
        let sectionIndex = sectionObj.index;
        let title = (sectionIndex === 0) ? "正在上映" : "即将上映";
        return (
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{title}</Text>
            </View>
        )
    };

    renderItem(item) {
        return (
            <MovieItemCell movie={item.item} onPress={() => {
                console.log('点击了电影----' + item.item.title);
            }}/>
        )
    };

    /**
     * 先加载正在上映的电影列表
     */
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
            that.setState(
                {
                    displayingMovies: movies,
                },
                () => {
                    that.loadComingMovies();
                }
            )
        }).catch((e) => {
            console.log("加载失败");
            that.setState({
                loaded: true
            })
        }).done();
    }

    /**
     * 加载即将上映的电影列表，并更新sectionData刷新列表
     */
    loadComingMovies() {
        let that = this;
        fetch(comingMovies('北京', 0, 20)).then((response) => response.json()).then((json) => {
            console.log(json);
            if (json == null) {
                that.setState({
                    loaded: true,
                });
                return
            }
            let movies = [];
            for (let idx in json.subjects) {
                let movieItem = json.subjects[idx];
                let directors = "";
                for (let index in movieItem.directors) {
                    let director = movieItem.directors[index];
                    if (directors === "") {
                        directors = directors + director.name
                    } else {
                        directors = directors + " " + director.name
                    }
                }
                movieItem["directorNames"] = directors;

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
            // 两个电影数据都加载完成后需要更新sectionData，将数据在界面上显示出来
            let sectionList = [
                {data: that.state.displayingMovies, index: 0},
                {data: movies, index: 1},
            ];
            that.setState({
                loaded: true,
                incomingMovies: movies,
                sectionData: sectionList
            });
        }).catch((error) => {
            console.log("加载失败");
            that.setState({
                loaded: true
            })
        }).done();
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'row',
    },
    loadingView: {
        flex: 1,
        height:height,
        backgroundColor: '#F5FCFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    bayStyle: {
        height: 48,
        width: width,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    txtStyle: {
        color: '#000',
        textAlign: 'center',
        fontSize: 18
    },
    sectionHeader: {
        padding: 10,
        backgroundColor: '#268dcd'
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});
