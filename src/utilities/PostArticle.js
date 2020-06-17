//This function sends post and returns promise regarding what happended

export default function PostArticle(data){
	return fetch('/api/articles', {
		method: "POST",
		credentials: "include",
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}).then (result => result.json()).catch(e => ({
		errorDetails: e,
		error: "Could not connect to server",
	}))
}
