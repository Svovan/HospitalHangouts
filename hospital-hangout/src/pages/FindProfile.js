import React from 'react'; 
import TinderCard from '../components/TinderCard'; 
import '../stylesheets/FindProfile.css'; 
import NavigationBar from '../components/NavigationBar';

class FindProfile extends React.Component {
	componentDidMount() {
		document.body.style.backgroundImage = "url('/find-profile-background.jpg')";
	}

	render() {
		return (
			<div className="FindProfile">
				<NavigationBar/> 
				<div class="profile-card">
					<TinderCard/> 
				</div>
				<div style={{display: 'flex', justifyContent: 'center'}}>
					<button class="dislike-button">
						<img src={process.env.PUBLIC_URL + '/tinder-dislike.jpg'} style={{width: '50px'}}/> 
					</button>
					<button class="like-button">
						<img src={process.env.PUBLIC_URL + '/tinder-like.jpg'} style={{width: '50px'}}/> 
					</button>
				</div>
			</div>
		); 
	}
}

export default FindProfile