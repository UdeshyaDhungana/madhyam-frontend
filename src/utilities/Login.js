//This function sends login information and returns appropriate response

/*
	returns in following format
	{
		errors: null/string,
		[others]
	}
	*/

export default function Login(data){
	let loginUrl = 'http://localhost:3000/api/login';

	return fetch(loginUrl, {
		method: 'POST',
		headers: {
			'Content-Type':'application/json',
		},
		body: JSON.stringify(data),
	})
		.then (result => {
			if (result.status === 422 || result.status === 401){
				return {
					errors: "Email or password is incorrect",
				}
			} else if (result.status === 500){
				return {
					errors: "Internal Server Error",
				}
			} else {
				return result.json();
			}
		}).catch(x => ({
			errors: "Could not connect to server",
		}));
}
