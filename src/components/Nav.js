import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from '../assets/logo.png'
import PropTypes from 'prop-types'

//components
import UserMenu from './UserMenu'

function NoUserComponents(){
	return (
				<ul className="navbar-nav ml-auto font-weight-bold">
					<li className="nav-item nav-link">
						<Link to="/login"> 
							Login
						</Link>
					</li>

					<li className="nav-item nav-link">
						<Link to="/signup"> 
							Signup
						</Link>
					</li>
				</ul>
	)
}

function UserComponents(){
	return (
		<ul className="navbar-nav ml-auto">
			<li className="nav-item">
				<UserMenu />
			</li>
		</ul>
	)
}


class Nav extends React.Component{
	render(){
		let componentsOnRight;
		if (this.props.isVerified && this.props.userExists){
			componentsOnRight = <UserComponents />
		} else if (this.props.isVerified && !this.props.userExists){
			componentsOnRight = <NoUserComponents />
		} else {
			componentsOnRight = null;
		}

		return (
		<div className="shadow">
			<nav className="navbar container navbar-expand">
				<Link to="/" className="navbar-brand ">
					<img src={Logo} alt="madhyam logo" />
				</Link>
				{componentsOnRight}
			</nav>
		</div>
		)
	}
};

Nav.propTypes = {
	userExists: PropTypes.bool.isRequired,
}

export default Nav;
