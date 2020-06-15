import React from 'react'

//Components
import LoginForm from '../components/LoginForm'

export default class Login extends React.Component{
	componentDidMount(){
		if (this.props.isVerified && this.props.userExists){
			this.props.history.push('/');
		}
	}

	render(){
		if (!this.props.isVerified){
			return <div />;
		} else {
			return (
				<div>
				<div
				className="container-fluid mt-5">
					<div className="row justify-content-center">
						<div className="col col-sm-5 border p-4 rounded-more shadow">
							<LoginForm 
								setCurrentUser={this.props.setCurrentUser}
								history = { this.props.history }
							/>
						</div>
					</div>
				</div>
				</div>
			);
		}
	}
}
