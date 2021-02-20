import React from 'react'; 
import '../stylesheets/CreateAccount.css'; 
import { Link } from 'react-router-dom'; 

// linear-gradient(toright, #6930C3, transparent)

class CreateAccount extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
			username: '', 
			password: '', 
			reconfirmPassword: '', 
			description: ''
		}; 
	}

	submitForm = (event) => {
		event.preventDefault(); 
		//if reconfirm password != password, then show warning modal 
		if(this.state.password !== this.state.reconfirmPassword) {

		}
		else {
			//make axios post call with new data 
		}

	}

	componentDidMount() {
		document.body.style.background = "linear-gradient(to right, #6930C3, transparent)";
	}

	render() {
		return (
			<div className="createAccount">
				<div class="box"> 
					<h1 style={{display: 'flex', justifyContent: 'center', paddingTop: '30px', color: '#5E60CE'}}>Create Account</h1>
					<form style={{display: 'flex', flexDirection: 'column'}} onSubmit={this.submitForm}>
						<input type="text" value={this.state.username} placeholder="Username" class="input-field" 
							onChange={event => {this.setState({username: event.target.value})}}/>
						<input type="password" value={this.state.password} placeholder="Password" class="input-field"
							onChange={event => {this.setState({password: event.target.value})}}/>
						<input type="password" value={this.state.reconfirmPassword} placeholder="Reconfirm Password" class="input-field"
							onChange={event => {this.setState({reconfirmPassword: event.target.value})}}/> 
						<input type="text" value={this.state.description} placeholder="About Me" class="description-field"
							onChange={event => {this.setState({description: event.target.value})}}/>
						<input type="submit" value="Submit" class="submit-button"/> 
					</form>
					<Link to="/" style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>Already Have an Account? Login Here</Link> 
					<Link to="/find-profile" style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>Find Profile</Link> 
				</div>
			</div>
		); 
	}
}

export default CreateAccount; 