// Imports
import React from 'react'
import 'typeface-roboto'
// Css

// Icons
import Instagram from '@material-ui/icons/Instagram'
import Twitter from '@material-ui/icons/Twitter'
import Github from '@material-ui/icons/GitHub'


export default function Footer() {
	return (
		<footer className="mt-5 py-5 bg-light">
			<div className="container">
				<div className="row">
					<div className="col">
						Copyright &copy; Udeshya
					</div>
					<div className="col text-right">

						<a className="m-1" href="https://github.com/UdeshyaDhungana">
							<Github
								className="text-dark"
							/>
						</a>
						<a className="m-1" href="https://twitter.com/Udeshya_D">
							<Twitter 
								className="text-primary"
							/>
						</a>
						<a className="m-1" href="https://www.instagram.com/d_ude95/">
							<Instagram
								className="text-danger"
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
