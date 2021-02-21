import React from 'react';
import firebase from '../firebase';
import 'firebase/auth';
import { withRouter } from 'react-router-dom';
import '../stylesheets/SignIn.css'; 

const auth = firebase.auth(); 

const SignIn = withRouter(({history}) => (
    <button onClick={() => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then((result) => {
            console.log(result); 
            history.push('/find-profile'); 
        }); 
    }} class="google-sign-in">
        Sign In with Google
    </button>
)); 

export default SignIn; 
