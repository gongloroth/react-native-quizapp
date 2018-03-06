import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Keyboard,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, resetToken } from '../actions';
import { Button } from './common';

class Login extends Component {
  componentWillMount() {
    if (this.props.token !== '') {
    resetToken();
    console.log(this.props.token);
    }
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    console.log({ email, password });
    Keyboard.dismiss();
    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  renderButton() {
    console.log(this.props.loading);
    if (this.props.loading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }

    console.log(this.props.loading);
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (

      <View style={styles.mainContainer}>
        <View style={styles.loginContainerStyle}>
          <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>Email:</Text>
              <TextInput
                style={styles.inputStyle}
                placeholder='email@gmail.com'
                placeholderTextColor='#90CAF9'
                underlineColorAndroid='#90CAF9'
                autoCapitalize='none'
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
              />
          </View>
          <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>Password:</Text>
              <TextInput
                secureTextEntry
                style={styles.inputStyle}
                placeholder='password'
                placeholderTextColor='#90CAF9'
                underlineColorAndroid='#90CAF9'
                autoCapitalize='none'
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
              />
          </View>
        </View>
        {this.renderButton()}
        {this.renderError()}
      </View>

    );
  }

}


const styles = {
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#90CAF9',
    padding: 10
  },
  loginContainerStyle: {
    margin: 10,
    padding: 10,
    backgroundColor: '#841584',
    flexDirection: 'column',
    borderRadius: 10,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    position: 'relative'
  },
  containerStyle: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelStyle: {
    flex: 1,
    paddingLeft: 5,
    color: '#90CAF9',
    fontWeight: 'bold',
    fontSize: 14
  },
  inputStyle: {
    flex: 3,
    paddingLeft: 5,
    color: '#90CAF9',
    fontWeight: 'bold',
    fontSize: 14
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = (state) => {
  const { email, password, error, loading } = state.auth;
  const { token } = state.token;

  return {
    email,
    password,
    error,
    loading,
    token
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
  resetToken
})(Login);
