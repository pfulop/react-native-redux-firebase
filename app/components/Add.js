//@flow

import React, { Component,PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Add extends Component {

  constructor() {
    super();
    this.state = {
      number: 0,
    };
    this.timer = null;
    this.addOne = this.addOne.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  addOne() {
    this.setState({number: this.state.number+1});
    this.timer = setTimeout(this.addOne, 200);
  }

  stopTimer() {
    clearTimeout(this.timer);
  }

  static navigationOptions = {
    tabBar: {
      label: 'Add One',
      icon: ({ tintColor }) => (
        <Icon name="plus-circle" size={30} color={tintColor} />
      ),
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 25, marginTop: 150, textAlign: 'center',color: 'white'}}>{this.state.number}</Text>
        <TouchableOpacity onPressIn={this.addOne} onPressOut={this.stopTimer} style={{ alignSelf: 'center'  }} onPress={this._onPressButton}>
          <Icon name="plus-circle" size={30} color={'white'} />
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    backgroundColor: '#559cf9',
  },
});


export default Add;
