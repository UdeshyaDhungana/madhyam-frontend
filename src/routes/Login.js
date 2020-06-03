import React from 'react'

//Components
import NoUserNav from '../components/NoUserNav.js'
import LoginForm from '../components/LoginForm'

let LoginContainerStyle = {
	height: "55vh",
}

export default class Login extends React.Component{
	render(){
		return (
			<div>
				<NoUserNav />
				<div
					className="container-fluid mt-5"
					style={LoginContainerStyle}>

					<div className="row justify-content-center">
						<div className="col col-sm-5 border p-4 rounded-more shadow">
							<LoginForm />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
