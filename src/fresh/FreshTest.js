import React, {Component} from 'react';
import {RefreshControl, ScrollView} from 'react-native';

function fetchData() {

}

export default class RefreshableList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        fetchData().then(() => {
            this.setState({refreshing: false});
        });
    };

    _refreshControl = () => {
        return <RefreshControl
            title={'加载中'}
            colors={['#51ACF2']}
            tintColor={'#666'}
            refreshing={this.state.isRefreshing}
            onRefresh={() => {
                this.setState(() => ({
                    isRefreshing: true,
                    page: 1,
                    showFoot: -1
                }), () => {
                    this.loadNewsList()
                })
            }
            }
        />;
    }

    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }
            />
        );
    }
}
