import React, { Component } from 'react';
import { View, Text } from 'react-native';

/**
 * 绝对布局
 */
export default class FlexDirectionBasics extends Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start', 'flex-end', 'center', 'stretch'
      <View style={styles.container}>
        <Text style={styles.headerStyle}>position</Text>
        <View style={styles.elementsContainer}>
          <View style={[{position: 'absolute'},styles.red]} />
          <View style={[{position: 'absolute'},styles.yellow]} />
          <View style={[{position: 'absolute'},styles.green]} />
        </View>
      </View>
    );
  }
}

const styles = {
  green : {
    backgroundColor: '#32B76C',
    height: 50,
    width: 30
  },
  yellow : {
    backgroundColor: '#FAA030',
    height: 50,
    width: 40
  },
  red : {
    backgroundColor: '#EE2C38',
    height: 50,
    width: 50
  },
  container: {
    marginTop: 48,
    flex: 1
  },
  headerStyle: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '300',
    marginBottom: 24
  },
  elementsContainer: {
    flex: 1,
    backgroundColor: '#ecf5fd',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24
  }
}
