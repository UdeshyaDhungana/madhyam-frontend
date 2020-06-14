import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Routes
import Home from './routes/Home';
import Signup from './routes/Signup'
import Login from './routes/Login'
import Article from './routes/Article'
import UserProfile from './routes/UserProfile'
import ArticleForm from './routes/ArticleForm'
//import Login from './routes/Login'

// Components
import Footer from './components/Footer'
import NoUserNav from './components/NoUserNav'

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<NoUserNav />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/signup" exact component={Signup} />
						<Route path="/login" exact component={Login} />
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
