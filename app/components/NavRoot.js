import React, { Component } from 'react';
import { push, pop } from '../actions/nav';
import { connect } from 'react-redux';
import {
  BackAndroid,
  NavigationExperimental
} from 'react-native';

const {
  CardStack: NavigationCardStack
} = NavigationExperimental;

class NavRoot extends Component {
  constructor (props) {
    super(props);
    this._renderScene = this._renderScene.bind(this);
    this._handleBackAction = this._handleBackAction.bind(this);
  }
  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction);
  }
  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction);
  }
  _renderScene (props) {
    const { route } = props.scene;
    if (route.key === 'App') {
     return <App
              _handleNavigate={this._handleNavigate.bind(this)} />
    }
  }
  _handleBackAction () {
    if (this.props.navigation.index === 0) {
      return false
    }
    this.props.popRoute()
    return true
  }
  _handleNavigate (action) {
    switch (action && action.type) {
      case 'push':
        this.props.pushRoute(action.route)
        return true
      case 'back':
      case 'pop':
        return this._handleBackAction()
      default:
        return false
    }
  }
  render () {
    return (
      <NavigationCardStack
        direction='vertical'
        navigationState={this.props.navigation}
        onNavigate={this._handleNavigate.bind(this)}
        renderScene={this._renderScene} />
      )
   }
}

function mapStateToProps (state) {
  return {
    navigation: state.navReducer
   }
}

export default connect(
  mapStateToProps,
   {
     pushRoute: (route) => push(route),
     popRoute: () => pop()
   }
)(NavRoot)
