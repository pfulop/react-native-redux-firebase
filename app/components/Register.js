//@flow

import React, { Component,PropTypes } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ListView,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Register extends Component {

  static navigationOptions = {
   tabBar: {
     label: 'Register',
     icon: ({ tintColor }) => (
      <Icon name="user" size={30} color={tintColor} />
     ),
   },
 }

  constructor(props) {
    super(props);
  }



  render() {
    return (
      <View />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

Register.propTypes={
}

export default Register
