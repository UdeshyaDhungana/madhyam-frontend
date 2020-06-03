import React from 'react'

//components
import UserNav from '../components/UserNav'
import NoUserNav from '../components/NoUserNav'
import Logo from '../assets/logo.png'
import verifyUser from '../utilities/Authenticate'

function EmptyNavbar(){
	return (
		<div className="shadow">
			<nav className="navbar container navbar-expand ">
				<a href="/" className="navbar-brand ">
					<img src={Logo} alt="madhyam logo" />
				</a>
			</nav>
		</div>
	)
}

export default class Nav extends React.Component{
	constructor(){
		super();
		this.state = {
			navigator: EmptyNavbar,
		}
	}

	componentDidMount(){
		verifyUser()
			.then(result => {
				if (result){
					this.setState({
						navigator: UserNav,
					});
				} else {
					this.setState({
						navigator: NoUserNav,
					});
				}
			});
	}

	render(){
		return (
			<this.state.navigator />
		);
	}
}
