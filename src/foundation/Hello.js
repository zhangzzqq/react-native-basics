import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from 'react-native'

class App extends Component {
    state = {
        count: 0,
        obj:{counts:0},


    }


    onPress = () => {
        this.setState({
            count:this.state.count + 1,
            obj: Object.assign({}, this.state.obj,
                { counts: this.state.obj.counts + 1}

                )

        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text>Click me</Text>
                </TouchableOpacity>
                <View style={styles.countContainer}>
                    <Text>
                        {/*You clicked { this.state.count } times*/}
                        You clicked { this.state.obj.counts } times
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        // marginEnd: '10'
    }
})

export default App;
