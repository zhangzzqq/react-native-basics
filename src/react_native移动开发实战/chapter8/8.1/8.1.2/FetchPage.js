import React, {PureComponent} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

const url = 'http://jsonplaceholder.typicode.com/users';

export default class FetchPage extends PureComponent {

    static navigationOptions = {
        title: 'Fetch请求'
    };

    constructor(props) {
        super(props);
        this.state=({

        })
    }

    getData(){
        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(e => console.log("Oops, error", e))
    }

    postData(){
        const data = {
            name:"Henry",
            username:"露丝",
            email:"lusi@qq.com"
        };
        fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:data
        })
            .then(res=>res.json())
            .then(data=>console.log(data))
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={styles.btnContainer} onPress={() => {
                    this.getData()
                }}>
                    <Text style={styles.textStyle}>GET请求</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnContainer} onPress={() => {
                    this.postData()
                }}>
                    <Text style={styles.textStyle}>POST请求</Text>
                </TouchableOpacity>
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
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: '#ffffff',
        fontSize: 18
    }
});
