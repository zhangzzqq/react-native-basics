import React, {PureComponent} from 'react';
import {View, SafeAreaView,TouchableHighlight, StyleSheet, Text, Dimensions,Platform} from 'react-native';
import SearchBox from '../component/SearchBox'

const {width, height} = Dimensions.get('window');

export default class SearchPage extends PureComponent {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    renderHotSearch() {
        let tagList = ['少年的你', '复仇者联盟4：终极之战', '千与千寻', '银河补习班', '阿拉丁', '速度与激情：特别行动',
            '哥斯拉2：怪兽之王', '最好的我们'];
        return (
            <View style={styles.container}>
                <Text style={styles.hotTxt}>热门搜索</Text>
                <View style={styles.tagContainer}>{
                    tagList.map((tag, index) => {
                        const tagDesc = tag.length > 12 ? tag.substr(0, 12) : tag;
                        return (
                            <TouchableHighlight style={styles.tagStyle} key={index}
                                                onPress={()=>{alert(tagDesc)}}>
                                <Text style={styles.tagTextStyle}>{tagDesc}</Text>
                            </TouchableHighlight>
                        );
                    })
                }
                </View>
            </View>
        );
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <SearchBox onSearchCancel={() => {this.props.navigation.goBack()}}/>
                {this.renderHotSearch()}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop:Platform.OS === 'android'?20:0
    },
    hotTxt: {
        margin: 15,
        fontSize: 14,
        color: '#a3a3a3'
    },
    tagContainer: {
        overflow: 'hidden',
        flexWrap: 'wrap',
        marginLeft: 15,
        marginRight: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: width - 50,
        backgroundColor: 'transparent',
    },
    tagStyle: {
        borderRadius: 15,
        marginRight: 6,
        justifyContent: 'center',
        height: 32,
        backgroundColor: '#E6E7E8',
        overflow: 'hidden',
        marginTop: 10
    },
    tagTextStyle: {
        justifyContent: 'center',
        fontSize: 18,
        paddingLeft: 12,
        paddingRight:12,
    },
});
