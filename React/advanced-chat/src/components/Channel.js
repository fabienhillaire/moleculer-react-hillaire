import React from 'react';
import UsernameDisplay from "./UsernameDisplay";


const Channel = (props) => {
	return (
		<div
			style={{
				marginLeft: 3,
				height: 500,
				width: 550,
				padding: 15,
				backgroundColor: `#F1EE5F`
			}}
		>
			Channel :
							<input

								type="number"
								name="quantity"
								min="-36"
								max="36"
								value={ !props.channel ? props.channel : 0 }
								onChange={props.onChangeChannel}

							/>

		</div>
	);
}
export default Channel;