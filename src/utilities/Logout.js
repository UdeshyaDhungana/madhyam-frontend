//This function requests server to delete cookies => hence logout

export default function Logout(){
	let logoutUrl = '/api/logout';
	
	return fetch(logoutUrl, {
		credentials: "include"
	})
		.then(result => result.json())
		.then(res => res);
}
