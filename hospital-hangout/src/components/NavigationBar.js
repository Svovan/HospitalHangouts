import React from 'react'; 
import '../stylesheets/NavigationBar.css'; 
import { Link } from 'react-router-dom'; 


class NavigationBar extends React.Component {
	render() {
		return (
			<div className="NavigationBar">
				<div class="bar">
					<img src="/navbar-logo.jpg" class="nav-logo"/>
					<div>
						<Link to="/find-profile" style={{color: 'white', textDecoration: 'none', fontSize: '20px', lineHeight: '50px'}}> 
							Find Profile
						</Link>
					</div>
					<div style={{marginLeft: '50px'}}>
						<Link to="/create-account" style={{color: 'white', textDecoration: 'none', fontSize: '20px', lineHeight: '50px', paddingRight: '50px'}}> 
							Create Account
						</Link>
					</div>
					
				</div>
			</div>
		); 
	}
}

export default NavigationBar