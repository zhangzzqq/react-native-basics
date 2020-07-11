import React, {Component} from "react";
import {View, StyleSheet, TouchableOpacity, Text, Image} from "react-native";
import RadioButton from "./RadioButton";


export default class RadioGroup extends Component {

    currentIndex = -1;
    dataArray = [];
    itemChange;

    constructor(props) {
        super(props);
        this.itemChange = props.itemChange;
    }

    render() {
        this.dataArray = [];
        const {
            data, orientation, defaultValue,drawablePadding, margin
        } = this.props;

        return (
            <View style={{flexDirection: orientation}}>{
                data.map((radioData, index) => {
                    return (
                        <RadioButton
                            index={index}
                            selected={index===defaultValue?true:false}
                            key={index}
                            ref={radioButton => this.dataArray.push(radioButton)}
                            text={radioData.text}
                            oritation={orientation}
                            drawablePadding={drawablePadding}
                            margin={index === 0 ? null : margin}
                            selectedChanged={() => {
                                this.change(index);
                            }}
                        />
                    );
                })
            }
            </View>
        );
    }

    change(index) {
        this.currentIndex = index;
        this.dataArray.map((refer, index2) => {
            if (refer !== null) {
                refer.setSelectedState(index2 === this.currentIndex);
            }
        });
        this.itemChange(this.currentIndex);
    }
}

const styles = StyleSheet.create({
    seltedImgs: {
        width: 20,
        height: 20,
        marginRight: 8
    },
    radioItem: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 15,
        height: 45
    }
});
