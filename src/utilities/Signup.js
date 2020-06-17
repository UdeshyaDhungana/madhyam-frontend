//this function fetches user signup and returns appropriate status

export default function Signup(data){
	let signUpUrl = '/api/users';

	return fetch(signUpUrl, {
		method: 'POST',
		credentials: "include",
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}).then(result => result.json()).catch(x => {
		return {
			errorDetails: x,
			error: "Could not connect to server",
		}
	});
}
