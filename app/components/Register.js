//@flow

import React, { Component,PropTypes } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ListView,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {registerWithEmail, loginWithEmail, loginWithFacebook} from '../actions/auth';
import {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk';

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
    this.state = {
      email: '',
      password: '',
    }
  }



  render() {
    const { email, password } = this.state;
    const { registerWithEmail, loginWithEmail, auth } = this.props;
    const loading = auth.isLoggingIn || auth.creatingAccount;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Register or Login</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput value={email} onChangeText={email => this.setState({email})} style={styles.textinput}/>
        <Text style={styles.label}>Password</Text>
        <TextInput secureTextEntry={true} value={password} onChangeText={password => this.setState({ password })} style={styles.textinput}/>
        <Button onPress={()=>registerWithEmail(email, password)} title="Register" color="white"/>
        <Button onPress={()=>loginWithEmail(email, password)} title="Login" color="white"/>
        <Button onPress={()=>loginWithFacebook()} title="Facebook Login" color="white"/>
        <Text style={styles.label}>{auth.error}</Text>
        {loading && <Text style={styles.label}>Loading</Text>}
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    backgroundColor: '#955cf9',
  },
  header: {
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    fontSize: 30,
  },
  label: {
    marginTop: 16,
    color: '#DDDDDD',
    fontSize: 12,
  },
  textinput: {
    backgroundColor: 'white',
    paddingLeft: 16,
    height: 34,
    color: 'black',
  }
});

Register.propTypes={
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerWithEmail: (email, password)=>dispatch(registerWithEmail(email, password)),
    loginWithEmail: (email, password)=>dispatch(loginWithEmail(email, password)),
    loginWithFacebook: (email, password)=>dispatch(loginWithFacebook(email, password)),
  }
}


const mapStateToProps = ({auth})=>{
  return {auth};
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
