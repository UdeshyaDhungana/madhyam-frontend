import {connect} from 'react-redux'
import Login from '../routes/Login'
import {createUser} from '../actions/actions'

const mapStateToProps = (state) => ({
	userExists: state.userExists,
	isVerified: state.isVerified,
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: data => dispatch(createUser(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
