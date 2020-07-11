import React, {PureComponent} from 'react';
import {TouchableOpacity, StyleSheet, Image, Text, View, PixelRatio,} from 'react-native';
import ImagePickerManager from 'react-native-image-picker'


export default class ImagePickerPage extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null,
            videoSource: null
        };
    }

    //选择图片
    selectPhotoTapped() {
        const options = {
            title: '选择图片',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '选择照片',
            cameraType: 'back',
            mediaType: 'photo',
            videoQuality: 'high',
            durationLimit: 10,
            maxWidth: 300,
            maxHeight: 300,
            quality: 0.8,
            allowsEditing: false,
            noData: false,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePickerManager.showImagePicker(options, (response) => {
                console.log('ImagePickerManager Response ===='+response);
                if (response.didCancel) {
                    console.log('User cancelled photo picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                } else {
                    let source = {uri: response.uri};
                    this.setState({
                        avatarSource: source
                    });
                }
            }
        );
    }

    //选择视频
    selectVideoTapped() {
        const options = {
            title: '选择视频',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '录制视频',
            chooseFromLibraryButtonTitle: '选择视频',
            mediaType: 'video',
            videoQuality: 'medium'
        };

        ImagePickerManager.showImagePicker(options, (response) => {
            console.log('ImagePickerManager response ====== '+response);
            if (response.didCancel) {
                console.log('User cancelled video picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                this.setState({
                    videoSource: response.uri
                });
            }
        });
    }

    render() {
        return (

            <View style={styles.container}>
                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                    <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 30}]}>
                        {this.state.avatarSource === null ? <Text style={styles.txt}>选择照片</Text> :
                            <Image style={styles.avatar} source={this.state.avatarSource}/>
                        }
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}>
                    <View style={[styles.avatar, styles.avatarContainer]}>
                        <Text style={styles.txt}>选择视频</Text>
                    </View>
                </TouchableOpacity>

                {this.state.videoSource &&
                <Text style={{margin: 8, textAlign: 'center'}}>{this.state.videoSource}</Text>
                }
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        borderRadius: 80,
        width: 160,
        height: 160
    },
    txt: {
       fontSize: 24,
    }

});

