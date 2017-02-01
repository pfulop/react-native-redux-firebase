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

class Items extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.items),
    };
    this._onLongPress=this._onLongPress.bind(this);
    this._onPress=this._onPress.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.items),
    });
  }

  _onLongPress(key){
    this.props.removeItem(key);
  }

  _onPress(key){
    this.props.updateItem(key,Math.floor((Math.random() * 100) + 1));
  }

  render() {
    return (
      <ListView
      style={styles.container}
      dataSource={this.state.dataSource}
      enableEmptySections
      renderRow={(data) =>
        <TouchableWithoutFeedback onPress={()=>this._onPress(data._key)} onLongPress={ () => this._onLongPress(data._key) }>
          <View >
            <Text>{data.title}</Text>
          </View>
        </TouchableWithoutFeedback>
      }
      />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

Items.propTypes={
  items: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
}

export default Items
