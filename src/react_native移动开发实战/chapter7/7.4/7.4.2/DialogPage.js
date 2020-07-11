import React, {PureComponent} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Dimensions} from 'react-native';
import FreeDialog from './FreeDialog'

const {width} = Dimensions.get('window')

export default class DialogPage extends PureComponent {

    constructor(props) {
        super(props);
        this.state=({
            isShowDialog:false,
        })
    }

    renderDialog(){
        return (
            <FreeDialog
                isShow={this.state.isShowDialog}
                title={'年终大促'}
                content={'您有新的新年礼品，请查收！'}
                buttonContent={'新年礼品请查收'}/>
        );
    }

    showDialog(){
       this.setState({
           isShowDialog:true
       })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnContainer} onPress={
                    this.showDialog.bind(this)}>
                    <Text style={styles.textStyle}>免费咨询医生</Text>
                </TouchableOpacity>
                {this.renderDialog()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    btnContainer: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#EE7942',
        height: 38,
        width:width-100,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: '#ffffff',
        fontSize: 18
    }
});
