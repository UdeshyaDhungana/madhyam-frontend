export default async function Authenticate(){
	let token = localStorage.getItem('token');
	if (!token){
		return false;
	}

	token = `Bearer ${token}`; 
	return fetch('http://localhost:3000/currentuser', {
		headers: {
			'authorization': token
		}
	}).then(result => {
		if (result.status === 200){
			return true;
		} else {
			return false;
		}
	});
}
