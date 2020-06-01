import React from "react";
import ReactDOM from "react-dom";
import {login, logout, signup} from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
    window.logout = logout;
    window.login = login;
    window.signup = signup;

    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to HipTrip</h1>, root);
});