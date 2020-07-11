import React from 'react';
import {Button, Text, View} from 'react-native';

export default class Hooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  setCount(){
     this.setState({
       count:this.state.count + 1
     })

  }

  render() {
    return (
        <View>
          <Text>You clicked {this.state.count} times</Text>
          <Button title={'  Click me'} onClick={() => this.setCount()}>

          </Button>
        </View>
    );
  }
}
