import { Button } from "@material-ui/core";
import React from "react";
import TCA_logo from './TCA_logo.png';
import "./Login.css";
import { auth, provider } from "../Firebase/firebase";
import { useStateValue } from "../Utility/StateProvider";
import { actionTypes } from "../Utility/reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = (error) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login_container">
        {/* <img src="components/images/TCA_logo.png" alt="TCA-logo" /> */}

        <img src={TCA_logo} alt="Login" style={{ width: '200px', height: 'auto' }} />
        <h1>Sign-in to TCA</h1>
        <Button variant="outlined" color="primary" onClick={signIn}>
          sign-in with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
