import React from 'react'
import 'typeface-playfair-display'
import {createMuiTheme, ThemeProvider} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

//utilities
import Signup from '../utilities/Signup'

//color theme for form
const colorTheme  = createMuiTheme({
	palette: {
		primary:{
			main: "#333",
		}
	},
});


export default class SignupForm extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			firstname: "",
			lastname: "",
			email: "",
			password: "",
			password2: "",
			errorMessage: "",
			isButtonDisabled: false,
		}
		this.ValidateEmail = this.ValidateEmail.bind(this);
		this.ValidateNames = this.ValidateNames.bind(this);
		this.ValidatePassword = this.ValidatePassword.bind(this);
		this.ValidatePassword2 = this.ValidatePassword2.bind(this);
		this.checkValid = this.checkValid.bind(this);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	ValidateNames(text) {
		return /^[a-zA-Z]+$/.test(text) && text.length >= 3;
	}

	ValidateEmail(text) {
		return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(text));
	}

	ValidatePassword(text) {
		return (text.length >= 8);
	}

	ValidatePassword2(text) {
		return (text === this.state.password && text.length >= 8);
	}

	handleChange(e){
		let targetName = e.target.name;
		let targetValue = e.target.value;
		this.setState({
			[targetName]: targetValue
		});
	}

	checkValid(){
		return (
			this.ValidateNames(this.state.firstname) && 
			this.ValidateNames(this.state.lastname) && 
			this.ValidateEmail(this.state.email) && 
			this.ValidatePassword(this.state.password) && 
			this.ValidatePassword2(this.state.password2)
		)
	}

	handleSubmit(e){
		e.preventDefault();
		//Tovalidate and submit form
		this.setState({
			isButtonDisabled: true,
		});

		if (this.checkValid()){
			Signup(Object.assign({}, this.state))
				.then(res => {
					if (res.error){
						this.setState({
							isButtonDisabled: false,
							errorMessage: res.error,
						})
					} else {
						//redirect to login page after signup
						this.props.history.push('/login');
					}
				});
		} else {
			this.setState({
				errorMessage: "Please fill the form appropriately",
				isButtonDisabled: false,
			});
		}
	}

	render(){
		return (
			<ThemeProvider theme={colorTheme}>
				<form
					className="mx-auto mt-3 px-4 py-3 shadow rounded-more border-top"
					autoComplete="off"
					onSubmit={this.handleSubmit}
				>

					<h3 className="text-center">Create New Account</h3>

					<TextField
						size="small"
						variant="outlined"
						value={this.state.firstname}
						required
						fullWidth
						name="firstname"
						label="First Name"
						id="firstname"
						helperText="Alphabets only"
						onChange={this.handleChange}
						className="my-2"
					/>
					<TextField
						size="small"
						variant="outlined"
						value={this.state.lastname}
						required
						fullWidth
						name="lastname"
						label="Last Name"
						id="lastname"
						helperText="Alphabets only"
						onChange={this.handleChange}
						className="my-2"
					/>
					<TextField
						size="small"
						variant="outlined"
						value={this.state.email}
						required
						fullWidth
						name="email"
						autoComplete={"off"}
						type="email"
						label="E-mail"
						id="email"
						onChange={this.handleChange}
						className="my-2"
					/>
					<TextField
						size="small"
						variant="outlined"
						value={this.state.password}
						required
						fullWidth
						name="password"
						helperText="Must be more than 8 characters"
						type="password"
						label="Password"
						id="password"
						onChange={this.handleChange}
						className="my-3"
					/>
					<TextField
						size="small"
						variant="outlined"
						value={this.state.password2}
						required
						fullWidth
						name="password2"
						helperText="Passwords must match"
						type="password"
						label="Confirm Passworrd"
						id="password2"
						onChange={this.handleChange}
						className="my-2"
					/>
					<p className="text-danger text-center">{this.state.errorMessage}</p>
					<div className="mt-3 text-center">
						<Button
							disabled={this.state.isButtonDisabled}
							type="submit"
							color="primary"
							variant={"contained"}
						> Signup </Button>
					</div>
				</form>
			</ThemeProvider>
		)
	}
}
