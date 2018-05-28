import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Message from "./components/Message";
import FormMessenger from "./components/FormMessenger";
import Channel from "./components/Channel";

import axios from "axios";

/*
	Penser à faire cette commande :
		 - npm install --save axios

*/

class App extends Component {

	// On définit toutes les variables dont on a besoin.

	state = {
		lastName: "",
		firstName:"",
		eMail:"",
		username_valid: false,
		isAdmin: false,
		message: "",
		error: false,
		messages: [],
		channel: 1,
	}


	_onChange_firstName(e) {
		this.setState({
			firstName: e.target.value
		});
	}
	
	_onChange_lastName(e) {
		this.setState({
			lastName: e.target.value
		});
	}

	_onChange_eMail(e) {
		this.setState({
			eMail: e.target.value
		});
	}


	_onChange_channel(e) {
		this.setState({
			channel: e.target.value
		});
	}

	_onClick_valid_username() {
		this.setState({
			username_valid: true
		});
	}

	_onClick_valid_admin() {
		this.setState({
			isAdmin: true
		});
	}


	_onChange_message(e) {
		console.log(e.target.value);
		this.setState({
			message: e.target.value
		});
	}

	_onClick_valid_message() {
		this._post_channel_message(this.state.channel)
			.then(() => {
				this.setState({
					message: "",
				});
			})
	}

	componentWillUnmount() {
		if (this.interval) {
			clearInterval(this.interval);
		}
	}

	_post_channel_message(channel) {
		return axios
		.post(
			`http://trainings.nanoapp.io/api/messenger/channel/${channel}`,
			{
				lastName: this.state.lastName,
				message: this.state.message
			}

		)
		.then(function (response) {
			console.log("_post_channel_message ", response);
			return {
				error: response.status !== 200,
			};
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	_fetch_channel_messages(channel) {
		return axios
		.get(`http://trainings.nanoapp.io/api/messenger/channel/${channel}`)
		.then(function (response) {
			console.log("_fetch_channel_messages ", response);
			return {
				error: response.status !== 200,
				messages: response.data
			};
		})
		.catch(function (error) {
			console.log(error);
		});
	}


	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Bienvenue sur la messagerie instantanée</h1>
				</header>
				<div
					style={{
						position: "absolute",
						top: 190,
						left: 0,
						right: 0,
						bottom: 0,
					}}
				>
					<FormMessenger

						//On récupère les données avec cette commande.

						lastName={this.state.lastName} 
						firstName={this.state.firstName}
						eMail={this.state.eMail}
						message={this.state.message}
						channel={this.state.channel}
						usernameValid={this.state.username_valid}
						isAdmin={this.state.isAdmin}
						onChangeUserName={this._onChange_lastName.bind(this)}
						onChangefirstName={this._onChange_firstName.bind(this)}
						onChangeeMail={this._onChange_eMail.bind(this)}
						onClickValidUserName={this._onClick_valid_username.bind(this)}
						onClickAdmin={this._onClick_valid_admin.bind(this)}
						onChangeMessage={this._onChange_message.bind(this)}
						onClickValidMessage={this._onClick_valid_message.bind(this)}
						onChangeChannel={this._onChange_channel.bind(this)}

					/>
					<ul>
						{
							this.state.username_valid ?
								this.state.messages.map((item, index) => {

									return (
										<Message
											key={item.id}
											lastName={item.lastName}
											message={item.message}
										/>
									);

								})
							:
								null
						}
					</ul>
				</div>
			</div>
		);
	}

}

export default App;
