import React, { Component } from 'react';
import { View, Text } from 'react-native';

/**
 * 相对布局
 */
export default class FlexDirectionBasics extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={styles.container}>
        <Text style={styles.headerStyle}>flex</Text>
        <View style={[{flex: 1}, styles.elementsContainer]}>
          <View style={{flex: 1, backgroundColor: '#EE2C38'}} />
          <View style={{flex: 2, backgroundColor: '#FAA030'}} />
          <View style={{flex: 3, backgroundColor: '#32B76C'}} />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    marginTop: 48,
    flex: 1
  },
  headerStyle: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '100',
    marginBottom: 24
  },
  elementsContainer: {
    backgroundColor: '#ecf5fd',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24
  }
}