import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default class Input extends Component {
    state = {
        text: '',
    }

    onChangeText = text => this.setState({ text })

    onSubmitEditing = () => {
        // console.log(this.props)
        const { onSubmitEditing2 } = this.props;
        // console.log(onSubmitEditing2)

        const { text } = this.state

        if (!text) return // Don't submit if empty
        //回调APP中的onSubmitEditing2方法
        onSubmitEditing2(text)
        this.setState({ text: '' })
    }

    render() {
        const { placeholder } = this.props
        const { text } = this.state

        return (
            <TextInput
                style={styles.input}
                value={text}
                placeholder={placeholder}
                onChangeText={this.onChangeText}
                onSubmitEditing={this.onSubmitEditing}
            />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        height: 50,
    },
})
