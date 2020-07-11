import React, {Component} from "react";
import {View, TouchableOpacity, Text, Image, StyleSheet} from "react-native";
let selectedImage=require("../../../images/ic_close.png");
let unSelectedImage=require("../../../images/ic_close.png");

export default class RadioButton extends Component {

    static defaultProps = {
        selectedChanged: false,
        selectedTextColor: '#F83D2B',
        unSelectedTextColor: '#333333',
    };

    state = {
        selected: this.props.selected,
    };

    constructor(props) {
        super(props);
        this.selectedChanged = props.selectedChanged;
    }

    render() {
        const {text, drawablePadding
        } = this.props;
        const {selected} = this.state;

        return (
            <TouchableOpacity onPress={() => {
                if (this.selectedChanged) {
                    this.selectedChanged(selected, !selected);}
                this.setState({
                    selected: !selected,
                })}}>
                <View style={styles.radioStyle}>
                    <Image
                        style={styles.image}
                        source={selected ? selectedImage : unSelectedImage}/>
                    <Text style={{color: selected ? this.props.selectedTextColor : this.props.unSelectedTextColor,
                        marginLeft: drawablePadding,fontSize:18}}>{text}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    setSelectedState(state) {
        this.setState({
            selected: state,
        });
    }
}

const styles = StyleSheet.create({
    radioStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginRight:20,
        marginTop:10,
        marginBottom:10
    },
    image: {
        width: 22,
        height: 22
    },
    text: {
        flexDirection: "row",
        alignItems: "center"
    },
});
