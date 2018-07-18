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
  WebView,
  View,
  Platform,
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
        const OurStoryHTML = require( './Ad.html');
      return (
          <View>
              <WebView
              style={styles.WebViewStyle}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={OurStoryHTML}
             />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  WebViewStyle:
        {
            justifyContent: 'center',
            alignItems: 'center',
            flex:1,
            marginTop: (Platform.OS) === 'ios' ? 20 : 0
        }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
