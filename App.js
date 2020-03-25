import React, {Component} from 'react';
import Header from './src/components/Header';
import {View} from 'react-native';
import AlbumList from './src/components/AlbumList';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <AlbumList />
      </View>
    );
  }
}
