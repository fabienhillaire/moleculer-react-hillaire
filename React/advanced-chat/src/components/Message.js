
import React from 'react';
import UsernameDisplay from "./UsernameDisplay";


const Messages = (props) => {
	return (
		<div
			style={{
				marginLeft: 33,
				height: 500,
				width: 550,
				padding: 15,
				backgroundColor: `#F1EE5F`
			}}
		>

			<h1>Vos Conversations Instantanées</h1>

			Veuillez écrire votre message s'il vous plaît :
						<input
							onKeyPress={(e) => {
								if (e.key === "Envoyer") {
									props.onClickValidMessage();
								}
							}}
							type="text"
							value={props.message}
							onChange={props.onChangeMessage}
						/>
						<button
							onClick={props.onClickValidMessage}
						>
							Envoyer
						</button>
		</div>
	);
}

export default Messages;
