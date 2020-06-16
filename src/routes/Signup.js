import React from 'react'
import SignupForm from '../components/SignupForm'

export default class Signup extends React.Component{

	componentDidUpdate(){
		if (this.props.isVerified && this.props.userExists){
			this.props.history.push('/');
		}
	}

	render(){
		//if not verified, don't display anything
		if (!this.props.isVerified){
			return <div/>;
		} else {
			//verified and user does not exist, then render
			if (this.props.userExists){
				return <div />;
			} else {
				return (
					<div>
						<div className="container-fluid">
							<div className="row mt-4 justify-content-center">
								<div 
									className="col mx-auto border-right border-secondary d-none d-md-block"> 
									<div className="w-75 ml-auto h-100 mt-3">
										<h2 className="text-right mt-5">Join Madhyam for Free</h2>
										<p className="mt-4 text-right">
											Join to raise your voice, join for change, join to express
											yourself. We provide you the platform for you to write
											anything. Befriend hundreds of writers like you, learn their
											ideas, and skills. You're here to learn. Take the full advantage
											of it.
										</p>
									</div>
								</div>
								<div className="col-md-6">
									<div className="row justify-content-center">
										<div className="col-md-10">
											<SignupForm 
												history={this.props.history}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)
			}
		}
	}
}
