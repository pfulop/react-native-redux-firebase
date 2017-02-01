//@flow

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import {pushItem,removeItem,updateItem,watchItems,unWatchItems} from '../actions/items';
import {connect} from 'react-redux';
import AddItem from './AddItem';
import Items from './Items';
import Register from './Register';

class TheCall extends Component {

  componentDidMount(){
    this.props.watchItems();
  }

  componentWillUnmount(){
    this.props.unWatchItems();
  }

  render() {
    return (
      <View>
        <AddItem pushItem={this.props.pushItem}/>
        <Items items={this.props.items} removeItem={this.props.removeItem} updateItem={this.props.updateItem}/>
        <Register/>
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

export default
connect(mapStateToProps,mapDispatchToProps) (TheCall)
