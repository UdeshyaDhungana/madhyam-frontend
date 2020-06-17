import React from 'react'
import ConnectionError from '../components/ConnectionError'
import {createMuiTheme, ThemeProvider} from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import {makeStyles} from '@material-ui/core/styles'

//adjusting height of loading Screen
let LoaderHeightAdjust = {
	margin: "30vh 0",
}


//styling for CircularProgress component
const LoaderStyles = makeStyles({
	root: {
		display: "block",
		margin: "auto",
	},
});

//Color theme for loading component
const ColorTheme  = createMuiTheme({
	palette: {
		primary:{
			main: "#333",
		}
	},
});

function LoadingScreen(){
	const classes = LoaderStyles();
	return (
		<div style={LoaderHeightAdjust}>
			<CircularProgress className={classes.root} />
		</div>
	)
}

export default class Validation extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			errorInFetch: false,
			fetched: false,
		}
	}

	componentDidMount(){
		//fetch the verification
		fetch(`/api/verification/${this.props.match.params.id}`).then(res => res.json())
			.then(response => {
				if (!response.error){
					this.setState({
						fetched: true,
						errorInFetch: false,
					})
				} else {
					this.setState({
						fetched: true,
						errorInFetch: true,
					})
				}
			}).catch(e => {
				this.setState({
					fetched: true,
					errorInFetch: true,
				})
			})
	}

	render(){
		let body = null;
		if (!this.state.fetched){
			body = <LoadingScreen />
		} else {
			if (this.state.errorInFetch){
				body = <ConnectionError />
			} else {
				body = <div className="row my-5"
					style={{height: "40vh"}}>
					<div className="col">
						<p className="text-center">
							Your email is verified!
						</p>
					</div>
				</div>
			}
		}
		return (
			<ThemeProvider theme={ColorTheme}>
				<div className="container">
					{body}
				</div>
			</ThemeProvider>
		)
	}
}
