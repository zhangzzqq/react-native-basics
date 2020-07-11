import React, {PureComponent} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

const url = 'http://jsonplaceholder.typicode.com/users';

export default class AsyncPage extends PureComponent {

    static navigationOptions = {
        title: 'Async异步请求'
    };

    constructor(props) {
        super(props);
        this.state = ({})
    }

    async test() {
        return 'hello world'
    };

    async testSync() {
        let promise = new Promise(resolve => {
            setTimeout(() => {
                resolve("async await test...");
            }, 1000);
        });
        let response = await promise;
        console.log(response);
    }


    async catchError() {
        let a;
        try {
            await Promise.reject('error')
        } catch (error) {
            console.log(error);
        }
        a = await 2;
        return a;
    }

    sleep(second, param) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(param);
            }, second);
        })
    }

    async queueTest() {
        let result1 = await this.sleep(2000, 'req01');
        let result2 = await this.sleep(1000, 'req02' + result1);
        let result3 = await this.sleep(3000, 'req03' + result2);
        console.log(`${result3}${result2}${result1}`);
    }

    asyncData() {
        this.test().then((v) => console.log(v))
    }

    asyncAwaitData() {
        this.testSync().then((v) => console.log(v))
    }

    catchData() {
        this.catchError().then((v) => console.log(v))
    }

    gatAllData() {
        this.queueTest().then((v) => console.log(v))
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={styles.btnContainer} onPress={() => {
                    this.asyncData()
                }}>
                    <Text style={styles.textStyle}>Async异步请求</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnContainer} onPress={() => {
                    this.asyncAwaitData()
                }}>
                    <Text style={styles.textStyle}>Async/Await请求</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnContainer} onPress={() => {
                    this.gatAllData()
                }}>
                    <Text style={styles.textStyle}>串行请求</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnContainer} onPress={() => {
                    this.catchData()
                }}>
                    <Text style={styles.textStyle}>Async错误处理</Text>
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
