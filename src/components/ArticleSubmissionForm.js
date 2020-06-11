import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AddCircleOutline from '@material-ui/icons/AddCircleOutline'
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline'
import IconButton from '@material-ui/core/IconButton'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

//theme for form
const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#333",
		}
	},
});

export default class ArticleSubmissionForm extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			title: "",
			paragraphs: [""],
		}

		//binding
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleParagraphChange = this.handleParagraphChange.bind(this);
		this.addParagraph = this.addParagraph.bind(this);
		this.removeParagraph = this.removeParagraph.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleTitleChange(e){
		let targetName = e.target.name;
		let targetValue = e.target.value;
		this.setState({
			[targetName]: targetValue
		});
	}

	handleParagraphChange(e, index){
		let paragraphs = this.state.paragraphs;
		paragraphs[index] = e.target.value;
		this.setState({
			paragraphs: paragraphs.slice(),
		})
	}

	addParagraph(){
		let paragraphs = this.state.paragraphs;
		if (Boolean( paragraphs[paragraphs.length-1] )){
			paragraphs.push("");
			this.setState({
				paragraphs: paragraphs.slice(),
			})
		}
	}

	removeParagraph(index){
		let paragraphs = this.state.paragraphs;
		paragraphs.splice(index,1);
		this.setState({
			paragraphs: paragraphs.slice(),
		})
	}

	handleSubmit(e){
		e.preventDefault();
		console.log(this.state);
	}

	render(){
		const paragraphs = this.state.paragraphs.map(( paragraph , index ) => {
			return (
					<TextField 
						key={index}
						multiline
						className="mt-4"
						fullWidth
						onChange={(e) => {this.handleParagraphChange(e, index)}}
						value={paragraph}
					/	>
			)
		});
		return (
			<ThemeProvider theme={theme}>
				<form onSubmit={this.handleSubmit}>

					<h3>Write a new Article</h3>

					<Button
						className="mt-3"
						type="submit"
						variant="contained"
						color="primary"
					>
						Publish
					</Button>	

					<TextField
						fullWidth
						variant="outlined"
						multiline
						className="my-5"
						label="Title"
						id="title"
						name="title"
						onChange={this.handleTitleChange} />

					{ paragraphs }

					<IconButton
						className="shadow mt-5"
						onClick={() => {
							let paragraphsSize = this.state.paragraphs.length;
							if (paragraphsSize > 1){
								this.removeParagraph(paragraphsSize-1);
							}
						}}
					>
						<RemoveCircleOutline />
					</IconButton>

					<IconButton 
						className="shadow ml-3 mt-5"
						onClick={() => {
								let paragraphs = this.state.paragraphs;
								if (paragraphs[paragraphs.length-1]){
									this.addParagraph();
								}
							}
						}
					>
						<AddCircleOutline />
					</IconButton>
				</form>
			</ThemeProvider>
		);
	}
}
