import {connect} from 'react-redux'
import Signup from '../routes/Signup'

const mapStateToProps = (state) => ({
	userExists: state.userExists,
	isVerified: state.isVerified,
})

export default connect(mapStateToProps)(Signup);
