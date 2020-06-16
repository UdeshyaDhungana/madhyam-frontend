import React from 'react'
import ErrorOutline from '@material-ui/icons/ErrorOutline'

let heightStyles = {
	height: "60vh",
	position: "relative",
	bottom: "2px",
}

export default function NotFound404(){
	return (
		<div className="container-fluid text-center">
			<ErrorOutline 
				style={heightStyles}
			/>
			&nbsp;Oops! Something's not right.
		</div>
	)
}
