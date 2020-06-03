import React from 'react'
//components
import {createMuiTheme, ThemeProvider} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Nav from '../components/Nav'

//Color theme for loading component
const ColorTheme  = createMuiTheme({
	palette: {
		primary:{
			main: "#333",
		}
	},
});

//styling for CircularProgress component
const LoaderStyles = makeStyles((theme) => ({
	root: {
		display: "block",
		margin: "auto",
	},
}));

//adjusting height of loading Screen
let LoaderHeightAdjust = {
	margin: "30vh 0",
}

//Displayed before article loads
function LoadingScreen(){
	const classes = LoaderStyles();
	return (
		<div style={LoaderHeightAdjust}>
			<CircularProgress className={classes.root} />
		</div>
	)
}

//main article
function ArticleBody(props){
	return (
		<div>This is article body</div>
	);
}

//full page
export default class Article extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			id: props.match.params.id,
			article: LoadingScreen,
		}
	}

	componentDidMount(){
		let articleLink = `http://localhost:3000/articles/${this.state.id}`;
		fetch(articleLink)
			.then(result => result.json())
			.then(article =>{
				console.log(article);
			});
	}

	render(){
		return (
			<div>
				<Nav />
				<ThemeProvider theme={ColorTheme}>
					<this.state.article />
				</ThemeProvider>
			</div>
		)
	}
}
