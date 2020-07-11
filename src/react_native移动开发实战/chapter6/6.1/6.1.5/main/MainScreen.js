
import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    SafeAreaView,
    Text,
    DeviceEventEmitter,
    View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import HomePage from './HomePage';
import MinePage from './MinePage';

//默认选项
const TAB_HOME_NORMAL = require('./image/tabbar_homepage.png');
const TAB_MINE_NORMAL = require('./image/tabbar_mine.png');
//选中
const TAB_HOME_PRESS = require('./image/tabbar_homepage_selected.png');
const TAB_MINE_PRESS = require('./image/tabbar_mine_selected.png');

export default class MainScreen extends Component {

    constructor() {
        super();
        this.state = {
            selectedTab: 'Home',
            msgCount:0,
        }
    }

    componentDidMount() {
         DeviceEventEmitter.addListener('unReadMsg', (num) => {
             this.setState({
                 msgCount: num,
                 }
             );
        });
    }

    componentWillUnmount() {
        DeviceEventEmitter.remove();
    }

    onPress(tabName) {
        if (tabName) {
            this.setState({
                    selectedTab: tabName,
                }
            );
        }
    }

    renderTabView(title, tabName, defaultTab, isBadge) {
        let tabNormal;
        let tabPress;
        let tabPage;
        switch (tabName) {
            case 'Home':
                tabNormal = TAB_HOME_NORMAL;
                tabPress = TAB_HOME_PRESS;
                tabPage = <HomePage {...this.props}/>;
                break;
            case 'Mine':
                tabNormal = TAB_MINE_NORMAL;
                tabPress = TAB_MINE_PRESS;
                tabPage = <MinePage {...this.props}/>;
                break;
            default:
        }

        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tabName}
                title={title}
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderIcon={() => <Image style={styles.icon} source={tabNormal}/>}
                renderSelectedIcon={() => <Image style={styles.icon} source={tabPress}/>}
                onPress={() => this.onPress(tabName)}
                renderBadge={() => isBadge&&this.state.msgCount>0 ?
                    <View style={styles.badgeView}><Text style={styles.badgeText}>{this.state.msgCount}</Text></View> : null}>
                <View style={styles.page}>
                    {tabPage}
                </View>
            </TabNavigator.Item>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator
                    tabBarStyle={styles.tabStyle}>
                    {this.renderTabView('首页', 'Home', HomePage, false)}
                    {this.renderTabView('我的', 'Mine', MinePage, true)}
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffffff'
    },
    tabStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabText: {
        fontSize: 10,
        color: 'black'
    },
    selectedTabText: {
        fontSize: 10,
        color: 'green'
    },
    icon: {
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    badgeView: {
        width: 16,
        height: 16,
        backgroundColor: '#f85959',
        borderWidth: 1,
        marginLeft: 10,
        marginTop: 5,
        borderColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    badgeText: {
        color: '#ffffff',
        fontSize: 10,
    },
});
