import { SET_AUTH } from "./actions";
import { REHYDRATE } from "redux-persist/constants";
import { browserHistory } from "react-router";

const applyJWTFromServer = (state, action) => {
  console.log("action", action);
  return Object.assign({}, state, {
    token: action.jwt,
    authenticatedAt: new Date()
  });
};

const jwt = (state = {}, action) => {
  console.log("in reducer", action);


  switch (action.type) {
    case SET_AUTH:
      return applyJWTFromServer(state, action);
    // case REHYDRATE:
    //   console.log("REHYDRATE", REHYDRATE);
    //   var incoming = action.payload.jwt;
    //   if (incoming) return { ...state, ...incoming };
    //   return state;
    default:
      return state;
  }
};

export default jwt;
