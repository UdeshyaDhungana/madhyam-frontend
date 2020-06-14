import React from 'react'

//Components
import LoginForm from '../components/LoginForm'

export default class Login extends React.Component{
	render(){
		return (
			<div>
				<div
					className="container-fluid mt-5">
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
