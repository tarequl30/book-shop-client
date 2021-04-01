import React from 'react';
import firebase from "firebase/app"
import "firebase/auth"

const Login = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    return (
        <div>
            <h2>this is login</h2>
        </div>
    );
};

export default Login;