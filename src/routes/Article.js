import React from 'react'
import moment from 'moment/dist/moment'
import {Link} from 'react-router-dom'
import ConnectionError from '../components/ConnectionError'
//components
import {createMuiTheme, ThemeProvider} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

//Color theme for loading component
const ColorTheme  = createMuiTheme({
	palette: {
		primary:{
			main: "#333",
		}
	},
});

//styling for CircularProgress component
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

//required styling for upcoming class
let authorStyle = {
	borderBottom: "1px solid #ccc",
}
//Displayed before article loads
//main article
function ArticleBody(props){
	const paragraphs = props.paragraphs.map((paragraph, index) => 
		<p className="mt-4 text-justify" key={index}>{paragraph}</p>
	);
	//date formatting
	return (
		<div className="article-body container-fluid mt-5">
			<div className="row justify-content-center">
				<div className="col-md-9 col-lg-8">
					<h2 className="text-center mb-4">{ props.title }</h2>
					{paragraphs}
					<h5 className="text-right"> 
						<Link to={props.author.url} style={authorStyle}>
							{props.author.fullname}
						</Link>
					</h5>
					<div className="text-right">
						<time>{ moment(props.createdAt).format("MMM DD, YYYY") }</time>
					</div>
				</div>
			</div>
		</div>
	);
}

//full page
export default class Article extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			id: props.match.params.id,
			isLoading: true,
			fetchError: false,
			articleDetails: null,
		}
	}

	componentDidMount(){
		let articleLink = `/articles/${this.state.id}`;
		fetch(articleLink, {
			credentials: "include",
		})
			.then(result => result.json())
			.then(article =>{
				if (typeof(article._id) === "undefined"){
					this.setState({
						isLoading: false,
						fetchError: true,
					});
				} else {
					let articleDetails = {
						title: article.title,
						author: article.author,
						createdAt: article.createdAt,
						paragraphs: article.paragraphs,
					}
					this.setState({
						isLoading: false,
						articleDetails: articleDetails,
					});
				}
			}).catch(e => {
				this.setState({
					fetchError: true,
					isLoading: false,
				})
			})
	}

	render(){
		let componentToRender = null;
		if (this.state.isLoading){
			componentToRender = <LoadingScreen /> 
		} else {
			if (this.state.fetchError){
				componentToRender = <ConnectionError />
			} else {
				componentToRender = <ArticleBody
									title={this.state.articleDetails.title}
									paragraphs={this.state.articleDetails.paragraphs}
									createdAt={this.state.articleDetails.createdAt}
									author={this.state.articleDetails.author}
									/>
			}
		}
		return (
			<div>
				<ThemeProvider theme={ColorTheme}>
					{componentToRender}
				</ThemeProvider>
			</div>
		)
	}
}
