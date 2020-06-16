import { connect } from 'react-redux'
import {deleteUser} from '../actions/actions'
import Nav from '../components/Nav'

const mapStateToProps = (state) => ({
	userExists: state.userExists,
	isVerified: state.isVerified,
	id: state.id,
});

const mapDispatchToProps = dispatch => ({
	deleteUser: () => dispatch(deleteUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
