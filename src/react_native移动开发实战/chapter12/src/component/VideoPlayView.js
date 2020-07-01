import React, {Component} from 'react';
import {
    View,
    Dimensions,
    Image,
    Text,
    Slider,
    TouchableWithoutFeedback,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Video from 'react-native-video';
import formatTime from '../utils/Utils'

const screenWidth = Dimensions.get('window').width;

export default class VideoPlayView extends Component {

    constructor(props) {
        super(props);
        let {url} = this.props;
        this.state = {
            videoUrl: url,
            videoWidth: screenWidth,
            videoHeight: screenWidth * 9 / 16, // 默认16：9的宽高比
            showVideoCover: true,    // 是否显示视频封面
            showVideoControl: false, // 是否显示视频控制组件
            isPlaying: false,        // 视频是否正在播放
            currentTime: 0,        // 视频当前播放的时间
            duration: 0,           // 视频的总时长
            isFullScreen: false,     // 当前是否全屏显示
            playFromBeginning: false, // 是否从头开始播放
        };
    }

    renderVideo() {
        return (<Video
            ref={(ref) => this.videoPlayer = ref}
            source={{uri: this.state.videoUrl}}
            rate={1.0}
            volume={1.0}
            muted={false}
            paused={!this.state.isPlaying}
            resizeMode={'contain'}
            playWhenInactive={false}
            playInBackground={false}
            ignoreSilentSwitch={'ignore'}
            progressUpdateInterval={250.0}
            onLoad={this.onLoaded}
            onProgress={this.onProgressChanged}
            onEnd={this.onPlayEnd}
            style={styles.videoStyle}/>)
    }

    renderPlayControl() {
        return (<TouchableWithoutFeedback onPress={() => {
            this.hideControl()
        }}>
            <View
                style={styles.videoControlStyle}>{
                this.state.isPlaying ? null :
                    <TouchableWithoutFeedback onPress={() => {
                        this.onPressPlayButton()
                    }}>
                        <Image
                            style={styles.playButton}
                            source={require('../images/play_icon.png')}
                        />
                    </TouchableWithoutFeedback>
            }
            </View>
        </TouchableWithoutFeedback>)
    }

    renderVideoControl() {
        return (this.state.showVideoControl ?
            <View style={[styles.control, {width: this.state.videoWidth}]}>
                <TouchableOpacity activeOpacity={0.3} onPress={() => {
                    this.onControlPlayPress()
                }}>
                    <Image
                        style={styles.playControl}
                        source={this.state.isPlaying ? require('../images/pause_icon.png') : require('../images/play_contro_icon.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.time}>{formatTime(this.state.currentTime)}</Text>
                <Slider
                    style={{flex: 1}}
                    maximumTrackTintColor={'#999999'}
                    minimumTrackTintColor={'#00c06d'}
                    value={this.state.currentTime}
                    minimumValue={0}
                    maximumValue={this.state.duration}
                    onValueChange={(currentTime) => {
                        this.onSliderValueChanged(currentTime)
                    }}
                />
                <Text style={styles.time}>{formatTime(this.state.duration)}</Text>
            </View> : null)
    }

    onPressPlayButton() {
        let isPlay = !this.state.isPlaying;
        this.setState({
            isPlaying: isPlay,
            showVideoCover: false
        });
        if (this.state.playFromBeginning) {
            this.videoPlayer.seek(0);
            this.setState({
                playFromBeginning: false,
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.videoContainer}>
                    {this.renderVideo()}
                    {this.renderPlayControl()}
                    {this.renderVideoControl()}
                </View>
            </View>
        )
    }

    onLoaded = (data) => {
        console.log('视频加载完成');
        this.setState({
            duration: data.duration,
        });
    };

    onProgressChanged = (data) => {
        console.log('视频进度更新');
        if (this.state.isPlaying) {
            this.setState({
                currentTime: data.currentTime,
            })
        }
    };

    onPlayEnd = () => {
        console.log('视频播放结束');
        this.setState({
            currentTime: 0,
            isPlaying: false,
            playFromBeginning: true
        });
    };

    // 控制播放器工具栏的显示和隐藏
    hideControl() {
        if (this.state.showVideoControl) {
            this.setState({
                showVideoControl: false,
            })
        } else {
            this.setState(
                {
                    showVideoControl: true,
                },
                // 5秒后自动隐藏工具栏
                () => {
                    setTimeout(
                        () => {
                            this.setState({
                                showVideoControl: false
                            })
                        }, 5000
                    )
                }
            )
        }
    }

    onControlPlayPress() {
        this.onPressPlayButton();
    }

    onSliderValueChanged(currentTime) {
        this.videoPlayer.seek(currentTime);
        if (this.state.isPlaying) {
            this.setState({
                currentTime: currentTime
            })
        } else {
            this.setState({
                currentTime: currentTime,
                isPlaying: true,
                showVideoCover: false
            })
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0'
    },
    videoContainer: {
        width: screenWidth,
        height: screenWidth * 9 / 16,
        backgroundColor: '#000000'
    },
    videoStyle: {
        width: screenWidth,
        height: screenWidth * 9 / 16
    },
    videoControlStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: screenWidth,
        height: screenWidth * 9 / 16,
        // backgroundColor: this.state.isPlaying ? 'transparent' : 'rgba(0, 0, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    playButton: {
        width: 45,
        height: 45,
    },
    playControl: {
        width: 24,
        height: 24,
        marginLeft: 15,
    },
    shrinkControl: {
        width: 15,
        height: 15,
        marginRight: 15,
    },
    time: {
        fontSize: 12,
        color: 'white',
        marginLeft: 10,
        marginRight: 10
    },
    control: {
        flexDirection: 'row',
        height: 44,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        position: 'absolute',
        bottom: 0,
        left: 0
    },
});
