import React from 'react'
import TextField from '@material-ui/core/TextField'
import FormHelperText from '@material-ui/core/FormHelperText'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

//utilities
import Login from '../utilities/Login'
// Theme tweaking
const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#333",
		}
	},
});

export default class LoginForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			email:"",
			password:"",
			errorMessage: "",
			isButtonDisasbled:false,
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		let targetName = e.target.name;
		let targetValue = e.target.value;

		this.setState({
			[targetName]: targetValue
		});
	}

	handleSubmit(e){

		e.preventDefault();

		this.setState({
			isButtonDisasbled: true,
		});

		Login(Object.assign({}, this.state))
			.then(res => { 
				if (res.error){
					this.setState({
						errorMessage: res.error,
						isButtonDisasbled: false,
					})
				} else {
					//dispatch and redirect to home
					this.props.setCurrentUser({
						id: res.id,
					})
					this.props.history.push('/');
				}
			});
	}

	render(){
		return (
			<ThemeProvider theme={theme}>

				<h2 className="text-center">
					Login
				</h2>

				<form
					onSubmit={this.handleSubmit}
					className="mt-3"
					method="POST"
					action="localhost:3000/login">

					<TextField
						className="mt-4"
						fullWidth
						required
						value={this.state.email}
						variant="standard"
						type="email"
						id="email"
						name="email"
						label="E-mail"
						onChange={this.handleChange}
					/>

					<TextField
						className="mt-4"
						fullWidth
						required
						value={this.state.password}
						variant="standard"
						type="password"
						id="password"
						name="password"
						label="Password"
						onChange={this.handleChange}
					/>

					<FormHelperText error children=" "> 
						{this.state.errorMessage}
					</FormHelperText>

					<div className="text-center mt-5">
						<Button
							disabled={this.state.isButtonDisasbled}
							variant="contained"
							type="submit"
							size="large"
							color="primary">
							Submit
						</Button>
					</div>
				</form>

			</ThemeProvider>
		);
	}
}
