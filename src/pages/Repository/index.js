import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

export default class Repository extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('item').name,
  });

  render() {
    const {navigation} = this.props;
    return (
      <WebView
        source={{uri: `${navigation.getParam('item').html_url}`}}
        style={{flex: 1}}
      />
    );
  }
}
