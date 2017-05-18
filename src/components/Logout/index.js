import React, { Component } from 'react'
import { Redirect} from "react-router-native";
import { connect } from "react-redux";
import {LOGOUT_REQUEST} from '../Login/actions'

class Logout extends Component {
  componentDidMount() {
    this.props.dispatch({type: LOGOUT_REQUEST})
  }

  render () {
    return (
      <Redirect to="/login" />
    )
  }
}

export default connect()(Logout)