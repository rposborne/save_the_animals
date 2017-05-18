import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link, Redirect } from "react-router-native";

import Login from "../Login";
import Logout from "../Logout";
import Observation from "../Observation";
import store from "../../store";


export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <Provider store={store}>
          <View style={styles.container}>


              <View style={styles.nav}>
                <Link
                  to="/observations/new"
                  underlayColor="#f0f4f7"
                  style={styles.navItem}
                >
                  <Text>Observe</Text>
                </Link>

                <Link
                  to="/logout"
                  underlayColor="#f0f4f7"
                  style={styles.navItem}
                >
                  <Text>Logout</Text>
                </Link>
                 </View>




            <Route
              exact
              path="/"
              render={() =>
                <Redirect to="/login" />}
            />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/observations/new" component={Observation} />
          </View>
        </Provider>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFF",
    margin: 10,
    paddingTop: 10
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  }
});
