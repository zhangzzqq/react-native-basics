import React, {PureComponent} from 'react';
import { StyleSheet,View,WebView} from 'react-native';

export default class DetailPage extends PureComponent {

    static navigationOptions = {
        title: '详情页',
    };

    render() {
        let url = 'http://www.baidu.com';
        return (
            <View style={styles.container}>
                <WebView
                    style={{width:'100%',height:'100%'}}
                    source={{uri: url}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})
