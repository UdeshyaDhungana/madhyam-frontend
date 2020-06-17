import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {createMuiTheme, ThemeProvider} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import moment from 'moment'
//Components
import ConnectionError from '../components/ConnectionError'
import CircularProgress from '@material-ui/core/CircularProgress'
import UserPhoto from '../assets/UserPage/account_icon.png'
//color scheme for loading component
const ColorTheme  = createMuiTheme({
	palette: {
		primary:{
			main: "#333",
		}
	},
});

const LoaderStyles = makeStyles({
	root: {
		display: "block",
		margin: "auto",
	},
});

//adjusting height of loading Screen
let LoaderHeightAdjust = {
	margin: "30vh 0",
}

function LoadingScreen(){
	const classes = LoaderStyles();
	return (
		<div style={LoaderHeightAdjust}>
			<CircularProgress className={classes.root} />
		</div>
	)
}

let articleListStyle = {
	borderLeft: "5px solid #ccc",
}

function UserBody(props){
	let articlesList;
	articlesList = (props.articles.length===0)?
		<p className="text-center mb-5">The user has not written any articles</p>:
		props.articles.map((article, index)=> (
			<div
				className="rounded shadow-sm pl-3 pb-1 pt-4 mt-3"
				style={articleListStyle}
				key={index}>
				<a href={article.url}>
					<h5 className="mb-1">
						{article.title}
						<ArrowForwardIosIcon />
					</h5>
					<p className="text-muted small">
						<time>
							{moment(article.createdAt).format("MMM DD, YYYY")}
						</time>		
					</p>
				</a>
			</div>
		)
		);
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-12">
					<img src={UserPhoto} alt="user profile"/>
				</div>
				<div className="col-12">
					<h4>{props.fullname}</h4>
				</div>
				<div className="col-8">
					{props.bio}
				</div>
			</div>

			<div className="row mt-5 justify-content-center">
				<div className="col col-sm-11 col-md-10 col-lg-6">
					<h4 className="text-center">
						Articles by user
					</h4>

					<div className="mt-4">
						{articlesList}	
					</div>
				</div>
			</div>
		</div>
	);
}

export default class UserProfile extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			id: props.match.params.id,
			loadingScreen: true,
			errorInFetch: false,
			userDetails: null,
		}
	}

	componentDidMount(){
		//preparing variables for fetch
		let userLink = `/api/users/${this.state.id}`;
		fetch(userLink, {
			credentials: "include",
		}).then(result => result.json())
			.then(user => {
				let userDetails = {
					fullname: user.fullname,
					bio: user.bio,
					articles: user.articles,
				}
				this.setState({
					loadingScreen: false,
					userDetails: userDetails,
				})

			})
			.catch(err => {
				this.setState({
					errorInFetch: true,
					loadingScreen: false,
				})
			})
	}

	render(){
		//build the component required to render
		let componentToRender = null;
		if (this.state.loadingScreen){
			componentToRender = <LoadingScreen />
		} else {
			if (this.state.errorInFetch){
				componentToRender = <ConnectionError />
			} else {
				componentToRender = <UserBody 
					articles={this.state.userDetails.articles}
					fullname={this.state.userDetails.fullname}
					bio={this.state.userDetails.bio}
				/>
			}
		}
		return (
			<div>
				<ThemeProvider theme={ColorTheme}>
					{ componentToRender }
				</ThemeProvider>
			</div>

		);
	}
}
