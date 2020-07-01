import React, {PureComponent} from "react";
import {View, Text, Image, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import Rate from '../component/Rate'

export default class MoviesList extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            listData: []
        };
        this.title = this.props.title;
        this.url = this.props.url;
        this.fetchData = this.fetchData.bind(this);
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData() {
        let url = this.url;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    listData: res.subjects,
                    loaded: true
                });
            });
    }

    renderTopicItem = ({item}) => {
        return (
            <TouchableOpacity
                style={styles.topicItem}
                onPress={() => {
                    this.props.onPressFn(item.id);
                }}>
                <Image
                    source={{uri: item.images.small}}
                    style={styles.topicImg}/>
                <View style={styles.topicContainer}>
                    <View style={styles.topicText}>
                        <Text style={styles.topicTitle}>
                            {item.title
                                ? item.title.length > 5
                                    ? item.title.substr(0, 5) + "..."
                                    : item.title
                                : ""}
                        </Text>
                        <View style={styles.rateContainer}>
                            {/*<Rate style={styles.rate} size={11} color='#f23859' value={item.rating.average/2}/>*/}
                            <Text style={styles.topicDesc}>
                                 电影评分 {item.rating.average}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    renderLoadingView() {
        return (
            <View style={styles.loading}>
                <Text style={styles.loadingTxt}>正在加载电影数据……</Text>
            </View>
        );
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return (
            <View>
                <View style={styles.tilwrap}>
                    <View style={styles.tilbor}/>
                    <View style={styles.tiltxt}>
                        <Text style={styles.txt}>{this.title}</Text>
                    </View>
                    <TouchableOpacity style={styles.more} onPress={() => {
                        this.props.onPressMore();
                    }}>
                        <Text style={styles.moreTxt}>更多></Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={this.state.listData}
                    keyExtractor={(item, index) => index + ""}
                    renderItem={this.renderTopicItem}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}/>
            </View>
        );
    }
}

let width = 142;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff'
    },
    loading: {
        paddingTop: 50
    },
    loadingTxt: {
        textAlign: "center"
    },
    tilwrap: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 15
    },
    tilbor: {
        width: 4,
        height: 24,
        backgroundColor: "#00b700"
    },
    tiltxt: {
        flex: 1,
        paddingLeft: 10
    },
    txt: {
        fontSize: 16,
        color: "#333"
    },
    more: {
        width: 100,
        paddingRight: 10
    },
    moreTxt: {
        textAlign: "right",
        color: "#888",
    },
    topic: {
        width: width,
        alignItems: "center",
        backgroundColor: "#fff",
        paddingBottom: 10,
        marginBottom: 10
    },
    topicHead: {
        fontSize: 16,
        color: "#666",
        padding: 15
    },
    topicItem: {
        width: width * 0.7,
        marginLeft: 15,
    },
    topicImg: {
        width: width * 0.7,
        height: width * 1.04,
        borderWidth: 0.5,
        borderColor: "#cdcdcd",
        borderRadius: 2
    },
    topicContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    topicTitle: {
        fontSize: 16,
        color: "#333"
    },
    rateContainer: {
        flexDirection: "row",
        alignItems: 'center',
    },
    rate: {
        alignItems: 'center',
        marginLeft: 8
    },
    topicDesc: {
        fontSize: 12,
        color: "#999",
        marginTop: 3
    },
    topicPrice: {
        fontSize: 14,
        color: "#b4282d"
    }
});
