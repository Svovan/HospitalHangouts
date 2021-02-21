import React from 'react';
import firebase from '../firebase';
import 'firebase/auth';
<<<<<<< HEAD

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
=======
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
>>>>>>> 04f7216e86dd7353aa5eb40dac3e01c6f9f1f810

export default SignIn; 
