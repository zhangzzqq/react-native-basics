import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class FetchExample extends React.Component {

    constructor(props){
        super(props);
        console.log('constructor')
        this.state ={ isLoading: true}
    }

    componentDidMount(): void {
        console.log('componentDidMount')
        return fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }

componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
    console.log('componentDidUpdate')

}

componentWillUnmount(): void {
    console.log('componentWillUnmount')

}

    render(){
        console.log('render')
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    {/*加载框*/}
                    <ActivityIndicator/>
                </View>
            )
        }
        return(
            <View style={{flex: 1, paddingTop:20}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                    keyExtractor={({id}, index) => id}
                />
            </View>
        );
    }
}

function getMoviesFromApiAsync() {
    return fetch('https://reactnative.dev/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson.movies;
        })
        .catch((error) => {
            console.error(error);
        });
}



async function getMoviesFromApi() {
    try {
        let response = await fetch('https://reactnative.dev/movies.json');
        let responseJson = await response.json();
        return responseJson.movies;
    } catch (error) {
        console.error(error);
    }
}
