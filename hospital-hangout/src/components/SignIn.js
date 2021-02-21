import React from 'react';
import firebase from '../firebase';
import 'firebase/auth';

const auth = firebase.auth();
function SignIn(props) {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return (
        <button onClick={signInWithGoogle}> Sign in with Google </button>
    )
}

export default SignIn