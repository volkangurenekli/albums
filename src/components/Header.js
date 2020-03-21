import React, {Component} from 'react';
import {Text, View} from 'react-native';
export default class Header extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>Volkan Gürenekli</Text>
      </View>
    );
  }
}

const styles = {
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    height: 80,
    paddingTop: 45,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,

    //elevation: 5,
    position: 'relative',
  },
  text: {
    fontSize: 23,
  },
};
