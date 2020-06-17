import {connect} from 'react-redux'
import App from '../App'
import {createUser, deleteUser} from '../actions/actions'


//we don't need this actually
const mapStateToProps = state => ({
	userExists: state.userExists,
})

const mapDispatchToProps = dispatch => ({
	setCurrentUser: data => dispatch(createUser(data)),
	deleteUser : () => dispatch(deleteUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
