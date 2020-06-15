export const CREATE_USER = 'CREATE_USER'
export const DELETE_USER = 'DELETE_USER'

export function createUser(userInfo){
	return {
		type: CREATE_USER,
		id: userInfo.id,
		userExists: userInfo.userExists,
	}
}

export function deleteUser(){
	return {
		type: DELETE_USER,
	}
}
