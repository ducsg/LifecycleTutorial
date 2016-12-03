/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class LifecycleTutorial extends Component {
  constructor(props) {
    super(props);
    console.log('step 1 go to constructor func')
  }

  componentWillMount() {
    console.log('step 2 go to componentWillMount func')
  }
  render() {
    console.log('step 3 go to render func')
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Component lifecycle in React Native!
        </Text>
      </View>
    );
  }
  componentDidMount() {
    console.log('step 4 go to componentWillMount func')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('LifecycleTutorial', () => LifecycleTutorial);
