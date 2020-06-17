//This function requests server to delete cookies => hence logout

export default function Logout(){
	return fetch('/api/logout', {
		credentials: "include"
	})
		.then(result => result.json())
		.catch(e => ({
			error: "Could not connect",
			erorrDetails: e,
		}))
}
