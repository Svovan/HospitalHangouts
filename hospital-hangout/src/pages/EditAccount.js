import React from 'react'; 
import NavigationBar from '../components/NavigationBar'; 
import '../stylesheets/EditAccount.css'; 

class EditAccount extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
			userDetails: {

			}, 
			editedUser: {
				username: '', 
				password: '', 
				description: ''
			}
		}; 
	}
	componentDidMount() {
		document.body.style.backgroundImage = "url('/find-profile-background.jpg')";
	}

	render() {
		return (
			<div className="EditAccount">
				<NavigationBar/>
				<div class="edit-input-form">
					<h1 style={{display: 'flex', justifyContent: 'center', paddingTop: '30px', color: '#5E60CE'}}>Edit User</h1>
					<form onSubmit={this.handleSubmit} style={{marginBottom: '30px'}}>
						<input type="text" value={this.state.editedUser.username} placeholder="Username" class="input-field" onChange={this.handleUsernameChange}/>
						<input type="password" value={this.state.editedUser.password} placeholder="Password" class="input-field" style={{marginTop: '20px'}} onChange={this.handlePasswordChange}/>
						<input type="text" value={this.state.editedUser.description} placeholder="About Me" class="description-field" style={{marginTop: '20px'}}/> 
						<input type="submit" value="Submit" class="submit-edit"/> 
					</form>
				</div>
			</div> 
		); 
	}
}

export default EditAccount