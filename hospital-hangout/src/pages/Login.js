import { findByLabelText } from '@testing-library/react';
import React from 'react'; 
import LoginComponent from '../components/LoginComponent'; 
import '../stylesheets/Login.css'; 

class Login extends React.Component {
	componentDidMount() {
		document.body.style.backgroundImage = "url('/find-profile-background.jpg')";
	}
	
	render() {
		return (
			<div class="login-page">
				<img class="hospital-image" src={process.env.PUBLIC_URL + '/keck.jpg'}/> 
				<div class="login">
					<div class="wrapper">
						<LoginComponent/> 
					</div>
				</div>
			</div>
		); 
	}
}

export default Login; 