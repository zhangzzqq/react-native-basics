import React, {Component, PureComponent} from 'react';
import {View, DeviceEventEmitter} from 'react-native';

export default class Parent extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View>
                <Son_1/>
                <Son_2/>
            </View>
        );
    }
}

class Son_1 extends PureComponent {
    componentDidMount() {
        setTimeout(() => {
            // 发布 msg 事件
            DeviceEventEmitter.emit('sendMsg', {text: 'Hello Brother'});
        }, 1000);
    }

    render() {

        return (<View>


        </View>);
    }
}

class Son_2 extends PureComponent {
    componentDidMount() {
        this.listener = DeviceEventEmitter.addListener('sendMsg', function (param) {
            //  use param do something
            let {text} = param;
            alert(text);
        });
    }
    
    //最后别忘了移除通知
    componentWillUnmount() {
        this.listener.remove();
    }

    render() {


        return (<View>


        </View>);
    }
}
