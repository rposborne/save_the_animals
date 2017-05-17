import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { NativeRouter, Route, Link, Redirect} from "react-router-native";
import { startLoginAction } from "./actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  focusNextField = nextField => {
    this.refs[nextField].focus();
  };

  getJWT = () => {
    this.props.dispatch(startLoginAction(this.state));
  };

  render() {
    if (this.props.jwt) {
      console.log('redirecting');

      return <Redirect to="/observations/new" />
    }

    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Save The Animals
        </Text>
        <View>
          <Text>Email</Text>
          <TextInput
            style={{ height: 40 }}
            autoFocus={true}
            autoCapitalize="none"
            returnKeyType="next"
            placeholder="ie; john.doe@gmail.com"
            blurOnSubmit={false}
            onChangeText={email => this.setState({ email })}
            onSubmitEditing={() => this.focusNextField("2")}
          />
          <Text>Password</Text>
          <TextInput
            ref="2"
            style={{ height: 40 }}
            placeholder="ie; red-pandas-123"
            secureTextEntry={true}
            returnKeyType="go"
            onChangeText={password => this.setState({ password })}
            onSubmitEditing={this.getJWT}
          />
          <Text>{this.props.jwt}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.email,
    jwt: state.jwt.token
  };
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch"
  },
  header: {
    marginTop: 100,
    fontSize: 30,
    textAlign: "center",
    margin: 10
  }
});

export const UnwrappedLogin = Login;

export default connect(mapStateToProps)(Login);
