import {CREATE_USER, DELETE_USER} from '../actions/actions'

const initialStoreState = {
	isVerified: false,
	userExists: false,
	id: null,
}

function rootReducer(state, action){
	switch(action.type){
		case CREATE_USER:
			//if store is empty, create one
			if (typeof (state) === "undefined"){
				return initialStoreState;
			} else {
				return Object.assign({}, {
					id: action.id,
					userExists: Boolean(action.id),
					isVerified: true,
				})
			}
		case DELETE_USER:
			return {
				isVerified: true,
				userExists: false,
				id: null,
			}
	
		default:
			return initialStoreState;
	}
}

export default rootReducer;
