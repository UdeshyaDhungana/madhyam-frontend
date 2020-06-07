import React from 'react'
import moment from 'moment/dist/moment'
import {Link} from 'react-router-dom'
import NotFound404 from '../components/NotFound404'
import Nav from '../components/Nav'
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
			article: <LoadingScreen />
		}
	}

	componentDidMount(){
		let articleLink = `http://localhost:3000/articles/${this.state.id}`;
		fetch(articleLink)
			.then(result => result.json())
			.then(article =>{
				if (typeof(article._id) === "undefined"){
					this.setState({
						article: <NotFound404 />
					});
				} else {
					this.setState({
						article: <ArticleBody
							title={article.title}	
							author={article.author}
							createdAt={article.createdAt}
							paragraphs={article.paragraphs}
						/>
					});
				}
			});
	}

	render(){ return (
		<div>
		<Nav />
		<ThemeProvider theme={ColorTheme}>
		{this.state.article}
		</ThemeProvider>
		</div>
	)
	}
}
