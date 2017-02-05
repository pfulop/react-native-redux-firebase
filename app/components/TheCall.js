//@flow

import React, { Component } from 'react';
import {
  Text,
  View,
  Platform,
  StyleSheet
} from 'react-native';
import {pushItem,removeItem,updateItem,watchItems,unWatchItems} from '../actions/items';
import {connect} from 'react-redux';
import AddItem from './AddItem';
import Items from './Items';
import Icon from 'react-native-vector-icons/FontAwesome';

class TheCall extends Component {

  static navigationOptions = {
   tabBar: {
     label: 'Items',
     icon: ({ tintColor }) => (
      <Icon name="plus" size={30} color={tintColor} />
     ),
   },
 }

  componentDidMount(){
    this.props.watchItems();
  }

  componentWillUnmount(){
    this.props.unWatchItems();
  }

  render() {
    return (
      <View style={styles.container}>
        <AddItem pushItem={this.props.pushItem}/>
        <Items items={this.props.items} removeItem={this.props.removeItem} updateItem={this.props.updateItem}/>
      </View>
    );
  }
}

const mapStateToProps = ({items})=>{
  return {items};
}

const mapDispatchToProps = (dispatch) => {
  return {
    pushItem: (item)=>dispatch(pushItem(item)),
    removeItem: (_key)=>dispatch(removeItem(_key)),
    updateItem: (_key,item)=>dispatch(updateItem(_key,item)),
    watchItems: ()=>dispatch(watchItems()),
    unWatchItems: ()=>dispatch(unWatchItems())
  }
}

var styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    justifyContent: 'flex-start',
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});

export default
connect(mapStateToProps,mapDispatchToProps) (TheCall)
