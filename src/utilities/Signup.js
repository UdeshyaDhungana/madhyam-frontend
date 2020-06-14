//this function fetches user signup and returns appropriate status

export default function Signup(data){
	let signUpUrl = 'http://localhost:3000/api/users';

	return fetch(signUpUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}).then(result => {
		if (result.status === 422){
			return {
				errorMessage: "Email already in use",
			}
		} else if (result.status === 500){
			return {
				errorMessage: "Internal Server Error",
			}
		} else if (result.status === 206){
			return {
				errorMessage: "Registered but email verification failed. You may login.",
			}
		} else {
			return {
				errorMessage: null,
			}
		}
	}).catch(x => {
		return {
			errorDetails: x,
			errorMessage: "Could not connect to server",
		}
	});
}
