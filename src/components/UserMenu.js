import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle'
import Settings from '@material-ui/icons/Settings'
import Logout from '@material-ui/icons/ExitToApp'
import Create from '@material-ui/icons/CreateSharp'

function UserMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="nav-menu">
			<IconButton
				aria-label="current user account"
				aria-controls="simple-menu"
				aria-haspopup="true"
				onClick={handleClick}
				color="inherit"
			>
				<AccountCircle />
			</IconButton>

			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}


				onClose={handleClose}
			>
				<Link to="/articles">
					<MenuItem onClick={handleClose} color="action">
						<Create color="action" /> &nbsp; New Article	
					</MenuItem>
				</Link>

				<Link to="/users/">
					<MenuItem onClick={handleClose}>
						<Settings color="action" /> &nbsp; Account	
					</MenuItem>
				</Link>

				<Link to="/users/">
					<MenuItem onClick={handleClose}>
						<Logout color="action" /> &nbsp; Logout
					</MenuItem>
				</Link>
			</Menu>
		</div>
	);
}


export default UserMenu;
