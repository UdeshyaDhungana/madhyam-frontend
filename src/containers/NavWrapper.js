import { connect } from 'react-redux'
import Nav from '../components/Nav'

const mapStateToProps = (state) => ({
	userExists: state.userExists,
	isVerified: state.isVerified,
})

export default connect(mapStateToProps)(Nav);
