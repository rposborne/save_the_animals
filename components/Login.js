import React, { Component } from "react";
import { TextInput, Text, View } from "react-native";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  focusNextField = nextField => {
    this.refs[nextField].focus();
  };

  getJWT = () => {
    console.log('JSON.stringify(...this.state)', JSON.stringify(this.state));

    const request = new Request('http://localhost:3000/api/auth.json', {
      method: "post",
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(this.state)
    });


    fetch(request)
      .then(function(response) {
        // Convert to JSON
        return response.json();
      })
      .then(function(j) {
        // Yay, `j` is a JavaScript object
        console.log(j);
      });
    console.log("this.state", this.state);
  };

  render() {
    return (
      <View style={{ alignSelf: "stretch" }}>
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
      </View>
    );
  }
}

export default Login;
