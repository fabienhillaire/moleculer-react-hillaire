
import React from "react";


const UsernameDisplay = (props) => (
	<div
		style={{
			padding: 5
		}}
	>
		{
			props.tagline ?
				`${props.tagline} : ${props.nom}`
				
			:
				props.nom
				
		}
	</div>	
)

export default UsernameDisplay;

