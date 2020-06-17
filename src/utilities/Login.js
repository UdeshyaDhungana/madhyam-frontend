//This function sends login information and returns appropriate response

/*
	returns in following format
	{
		error: null/string,
		[others]
	}
	*/

export default function Login(data){

	return fetch('/api/login', {
		method: 'POST',
		credentials: "include",
		headers: {
			'Content-Type':'application/json',
		},
		body: JSON.stringify(data),
	})
		.then (result => result.json()).catch(x => ({
			errorDetails: x,
			error: "Could not connect to server",
		}));
}
