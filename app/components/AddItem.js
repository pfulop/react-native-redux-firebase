//@flow

import React, { Component,PropTypes } from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableNativeFeedback,
  TouchableHighlight,
  Button,
} from 'react-native';

class AddItem extends Component {

  constructor(props) {
    super(props);
    this.state = { text: 'I will be added' };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style={styles.textInput}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
        <Button
        onPress={() => this.props.pushItem(this.state.text)}
        title="ADD!"
      />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection:'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    flex: 1,
  },
  textInput: {
    fontSize: 19,
    fontWeight: 'bold',
    borderWidth: 0,
    flex: 1,
  },
  button: {
  },
});

AddItem.propTypes={
  pushItem: PropTypes.func.isRequired
}

export default AddItem
