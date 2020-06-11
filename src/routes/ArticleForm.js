import React from 'react'
import Nav from '../components/Nav'
import ArticleSubmissionForm from '../components/ArticleSubmissionForm'

export default class ArticleForm extends React.Component{
	render(){
		return (
			<div>
				<Nav />	
				<div className="container-fluid mt-5">
					<div className="row justify-content-center">
						<div className="col-sm-10 col-md-9 col-lg-7">
							<ArticleSubmissionForm />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
