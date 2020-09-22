import React, {
    PureComponent,
} from 'react';
import {
    TouchableOpacity,
    Text,
    AppState,
    StyleSheet
} from 'react-native';

function fomatFloat(src, pos) {
    return Math.round(src * Math.pow(10, pos)) / Math.pow(10, pos);
}

class CountDown extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            appState: AppState.currentState,
            countdown: -1,
            disabled: false
        };
        this.backgroundTime = 0;
    }

    componentDidMount() {
        AppState.addEventListener('change', this._handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
        this.interval && clearInterval(this.interval);
    }

    _handleAppStateChange = (nextAppState) => {
        if (this.state.appState === 'active' && nextAppState.match(/inactive|background/)) {
            this.backgroundTime = new Date().getTime() / 1000;
        }
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
            this.backgroundTime = fomatFloat(new Date().getTime() / 1000 - this.backgroundTime,0);
        }
        this.setState({appState: nextAppState});
    }

    setCountdown(countdown) {
        this.setState({
           countdown: countdown
        });
    }

    getCountdown() {
        return this.state.countdown;
    }

    startCountDown() {
        this.interval = setInterval(() => {
            if (this.backgroundTime < this.getCountdown()) {
                this.setState({
                    countdown: this.getCountdown() - this.backgroundTime - 1
                },()=>{
                    this.backgroundTime = 0;
                    if (this.getCountdown() < 0) {
                        this.interval && clearInterval(this.interval);
                    }
                    if (this.getCountdown() >= 0) {
                        this.setButtonClickDisable(true);
                    } else {
                        this.setButtonClickDisable(false);
                    }
                });
            } else {
                this.setCountdown(-1);
                this.setButtonClickDisable(false);
                this.interval && clearInterval(this.interval);
            }
        }, 1000);
        this.setButtonClickDisable(true);
    }

    setButtonClickDisable(enable) {
        this.setState({
           disabled: enable
        });
    }

    onPress = () => {
        this.setCountdown(120);
        this.startCountDown();
    }

    render() {
        return (
            <TouchableOpacity disabled={this.state.disabled} onPress={this.onPress} style={styles.vcode}>
                {this.state.countdown >= 0 ?
                    <Text style={styles.vcodeText}>
                        {`${this.state.countdown}`}秒
                    </Text> :
                    <Text style={styles.vcodeText}>
                        获取验证码
                    </Text>
                }
            </TouchableOpacity>
        );

    }
}
const styles = StyleSheet.create({
    vcode: {
        borderRadius: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        height:40,
        justifyContent: 'center',
        backgroundColor:'white',
        alignItems: 'center',
        marginLeft: 5
    },
    vcodeText: {
        color: 'rgba(255,165,0,1.0)',
    }
});

export default CountDown;
