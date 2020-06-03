import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from '../assets/logo.png'

export default function NoUserNav() {
	return (
		<div className="shadow">
			<nav className="navbar container navbar-expand">
				<a href="/" className="navbar-brand ">
					<img src={Logo} alt="madhyam logo" />
				</a>
				<ul className="navbar-nav ml-auto">
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

			</nav>
		</div>
	)
}
