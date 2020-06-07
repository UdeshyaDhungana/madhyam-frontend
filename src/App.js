import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Routes
import Home from './routes/Home';
import Signup from './routes/Signup'
import Login from './routes/Login'
import Article from './routes/Article'
import UserProfile from './routes/UserProfile'
//import Login from './routes/Login'

// Components
import Footer from './components/Footer'

class App extends Component {
	render() {
		return (
			<div>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/signup" exact component={Signup} />
					<Route path="/login" exact component={Login} />
					<Route path="/articles/:id" component={Article} />
					<Route path="/users/:id" component={UserProfile} />
				</Switch>
			</Router>
			<Footer />
			</div>
		);
	}
}

export default App;
