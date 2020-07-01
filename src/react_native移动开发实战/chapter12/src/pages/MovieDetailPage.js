import React, {PureComponent} from "react";
import {View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity} from "react-native";
import {fetchMoviesDetail} from '../api/Service';
import VideoPlayView from '../component/VideoPlayView'
import Rate from '../component/Rate'

const {height, width} = Dimensions.get("window");

export default class MovieDetailPage extends PureComponent {

    static navigationOptions = {
        headerTitle: '电影详情',
    };

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            details: {},
            videoPlay: false
        };
        const {params} = this.props.navigation.state;
        this.id = params ? params.id : "";
    }

    componentDidMount() {
        this.getMoviesData();
    }

    getMoviesData() {
        fetch(fetchMoviesDetail(this.id))
            .then(res => res.json())
            .then(ret => {
                console.log(ret);
                this.setState({
                    details: ret,
                    loaded: true
                });
            });
    }

    renderLoadingView() {
        return (
            <View style={styles.loading}>
                <Text style={styles.loadingTxt}>正在加载电影数据……</Text>
            </View>
        );
    }

    renderHeaderView() {
        return (
            <View style={styles.detailsHd}>
                <View style={styles.detailsHdBgWrap}>
                    <Image source={{uri: this.state.details.images.large}}
                           style={styles.filmImgsBg}/>
                    <TouchableOpacity style={styles.palyContainer} onPress={() => {
                        if (this.state.details.blooper_urls) {
                            this.props.navigation.navigate('VideoPlayPage', {
                                url: this.state.details.blooper_urls[0]
                            });
                        }
                    }}>
                        <Image source={require('../images/play_icon.png')}
                               style={styles.palyIcon}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderVideoView() {
        return (
            <VideoPlayView url={this.state.details.blooper_urls[0]}/>
        )
    }


    renderPlayBtn() {
        if (!this.state.videoPlay) {
            return (
                <TouchableOpacity style={styles.palyContainer} onPress={() => {
                    alert(this.player)
                }}>
                    <Image source={require('../images/play_icon.png')}
                           style={styles.palyIcon}/>
                </TouchableOpacity>
            )
        } else {
            return null;
        }

    }

    renderFilmCardView() {
        return (
            <View style={styles.filmCardContainer}>
                <View style={styles.filmImgs}>
                    <Image source={{uri: this.state.details.images.small}}
                           style={styles.filmImgs}/>
                </View>
                <View style={styles.filmInfo}>
                    <Text style={styles.name}>
                        {this.state.details.title}
                    </Text>

                    <View style={styles.rateContainer}>
                        <Text style={styles.rateTxt}>
                            {this.state.details.rating.average}
                        </Text>
                        <Rate style={styles.rate} value={this.state.details.rating.average/2} color='#f23859' />
                    </View>

                    <View style={styles.tagsContainer}>
                        <Text style={styles.tags} numberOfLines={1}>
                            {this.state.details.genres.join('/')}
                        </Text>
                        <Text style={styles.durations}>
                            {this.state.details.durations}
                        </Text>
                    </View>
                    <Text style={styles.publish} numberOfLines={1}>
                        {this.state.details.pubdate} 在中国大陆上映
                    </Text>
                    <Text style={styles.count}>
                        {this.state.details.ratings_count}人评价
                    </Text>
                </View>
            </View>
        )
    }

    renderPriceView() {
        return (
            <View style={styles.price}>
                <View style={styles.priceStyle}>
                    <Image style={styles.priceImage} source={require('../images/likeit_default.png')}/>
                    <Text style={styles.priceTxt}>想看</Text>
                </View>

                <TouchableOpacity style={styles.priceStyle} onPress={()=>{
                    this.props.navigation.navigate('RatePage');
                }}>
                    <Image style={styles.priceImage} source={require('../images/star_default.png')}/>
                    <Text style={styles.priceTxt}>看过</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderFilmIntroView() {
        return (
            <View style={styles.intro}>
                <Text style={styles.introTxt}>
                    {this.state.details.summary}
                </Text>
            </View>
        )
    }

    renderBuyView() {
        return (
            <View style={styles.buyStyle}>
                <TouchableOpacity style={styles.buyBtnStyle} onPress={() => {
                    this.props.navigation.navigate('VideoPlayPage')
                }}>
                    <Text style={styles.buyTxtStyle}>选座购票</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    {/*{this.renderHeaderView()}*/}
                    {this.renderVideoView()}
                    {this.renderFilmCardView()}
                    {this.renderPriceView()}
                    {this.renderFilmIntroView()}
                </ScrollView>
                {this.renderBuyView()}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    loading: {
        paddingTop: 50
    },
    loadingTxt: {
        textAlign: 'center'
    },
    container: {
        flex: 1
    },
    detailsHd: {
        width: width,
        height: 200,
        position: "relative",
    },
    detailsHdBgWrap: {
        width: width,
        height: 200,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "red"
    },
    filmImgsBg: {
        width: width,
        height: 200
    },
    palyContainer: {
        width: width,
        height: 200,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        alignItems: 'center',
        justifyContent: 'center'
    },
    palyIcon: {
        width: 35,
        height: 35,
    },
    filmCardContainer: {
        width: width,
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        flexDirection: "row",
    },
    filmImgs: {
        width: 100,
        height: 140
    },
    filmInfo: {
        flex: 1,
        paddingLeft: 15,
        color: "#fff"
    },
    name: {
        fontSize: 20,
        paddingTop: 15,
        fontWeight: 'bold'
    },
    tagsContainer: {
        flexDirection: "row",
        marginTop: 5,
        paddingRight: 20
    },
    tags: {
        fontSize: 12,
        color: "#999"
    },
    durations: {
        fontSize: 12,
        color: "#999",
        marginLeft: 10
    },
    publish: {
        fontSize: 12,
        marginTop: 5,
        color: "#999"
    },
    rateContainer: {
        flexDirection: "row",
        alignItems:'center',
    },
    rateTxt: {
        fontSize: 22,
        marginTop: 8,
        alignItems:'center',
    },
    rate: {
        alignItems:'center',
        marginLeft:8
    },
    count: {
        fontSize: 12,
        marginTop: 5,
        color: "#999"
    },
    price: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15
    },
    priceStyle: {
        borderRadius: 25,
        justifyContent: 'center',
        width: width / 2 - 40,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#efefef',
    },
    priceImage: {
        height: 18,
        width: 18
    },
    priceTxt: {
        fontSize: 16,
        textAlign: 'center',
        marginLeft: 5
    },
    intro: {
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10
    },
    introTxt: {
        fontSize: 14,
        lineHeight: 22
    },
    buyStyle: {
        height: 60,
        width: width,
        backgroundColor: '#ffffff'

    },
    buyBtnStyle: {
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: width - 60,
        height: 50,
        backgroundColor: '#f23859',
    },
    buyTxtStyle: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff'
    }
});

