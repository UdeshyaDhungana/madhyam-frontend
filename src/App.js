import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Routes
import Home from './routes/Home';
import SignupWrapper from './containers/SignupRouteWrapper'
import LoginWrapper from './containers/LoginRouteWrapper'
import Article from './routes/Article'
import UserProfile from './routes/UserProfile'
import ArticleForm from './routes/ArticleForm'
//import Login from './routes/Login'

// Components
import Footer from './components/Footer'
import NavWrapper from './containers/NavWrapper'

class App extends Component {
	componentDidMount(){
		fetch('/api/validatetoken',{
			credentials: "include",
		}).then(result => result.json())
			.then(res => {
				this.props.setCurrentUser(res);
			})
	}

	render() {
		return (
			<div>
				<Router>
					<NavWrapper />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/signup" exact component={SignupWrapper} />
						<Route path="/login" exact component={LoginWrapper} />
						<Route path="/users/:id" component={UserProfile} />
						<Route path="/articles/new" exact component={ArticleForm} />
						<Route path="/articles/:id" component={Article} />
					</Switch>
					<Footer />
				</Router>
			</div>
		);
	}
}

export default App;
