import React from 'react'; 
import '../stylesheets/TinderCard.css'; 

class TinderCard extends React.Component {
	render() {
		let username = 'Catherine Phu'; 
		let description = 'Hi, my name is Catherine and I am currently a 3rd year at USC studying Computer Science and Busines Administration. My hometown is Torrance, Ca and my hobbies include reading and drawing.'; 
		return (
			<div className="TinderCard">
				<div class="card">
					<h1 class="username">{username}</h1>
					<div class="description">
						<p>{description}</p>
					</div>
				</div>
			</div>
		); 
	}
}

export default TinderCard