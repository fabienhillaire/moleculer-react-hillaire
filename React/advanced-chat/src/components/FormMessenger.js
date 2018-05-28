
import React from 'react';

import UsernameDisplay from "./UsernameDisplay";
import Message from "./Message";
import Channel from "./Channel";
import '../App.css';

const FormMessenger = (props) => {
	
	const styleChild = {
		position: "absolute",
		top: "50%",
		width: "50%",
		transform: "translateX(50%)"
	}

	return (
		<div
			style={
				 {
				 	height: 150,
				 	width: "100%",
				 	position: "relative",
				 	backgroundColor: "transparent"
				 }
			 }
		>
			{
				!props.usernameValid ?
					<div style={styleChild}>

						<UsernameDisplay nom={props.lastName} tagline="Votre nom de famille est "/>
						<UsernameDisplay nom={props.firstName} tagline="Votre prénom est "/>
						<UsernameDisplay nom={props.eMail} tagline="Votre e-Mail est "/>
						

						Veuillez écrire votre nom :

						<input
							onKeyPress={(e) => {
								if (e.key === "Entrer") {
									props.onClickValidUserName();
								}
							}}
							type="text"
							value={props.lastName}
							onChange={props.onChangeUserName}
						/>

						<br/>

						
						Veuillez écrire votre prénom : 

						<input
							onKeyPress={(e) => {
								if (e.key === "Entrer") {
									props.onChangefirstName();
								}
							}}
							type="text"
							value={props.firstName}
							onChange={props.onChangefirstName}
						/>

						<br/>

						Veuillez entrer votre eMail : 
						<input
							onKeyPress={(e) => {
								if (e.key === "Entrer") {
									props.onClickValidUserName();
								}
							}}
							type="text"
							value={props.eMail}
							onChange={props.onChangeeMail}
						/>

						<br/>

						Êtes-vous un administrateur ?
						<input
							
							type="checkbox"
							onChange={props.onClickAdmin}
							
						/>

						<br/>

						<button onClick={props.onClickValidUserName}>
							Se Connecter
						</button>

					</div>
				:
					<div style={styleChild}>
						
						
						<UsernameDisplay nom={props.lastName + ' ' + props.firstName} tagline="Bonjour et bonne visite sur ce site "/>

						{
							props.isadmin ?	
								<span>
									<span style={
										 {
										 	margin: 150,
										 	height: 200
										 }
									 }>
										<Channel/>
									</span>
									<span>
										<Message/>
									</span>
								</span>
							:
								<div>
									<Message/>
								</div>
								
						}	

						

						
					</div>
			}
		</div>
	);
}

export default FormMessenger;
