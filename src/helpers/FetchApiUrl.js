export const fetchApiUrl = (path, params) => {
	const base_url = 'https://api.unsplash.com/';
	const client_id = '8f9fbd10d8bb0a7e69dd531aea77d5a0b84152b806286ed7f83f896c1987413b';
	const paramKeys = Object.keys(params);
	const combinedParams = paramKeys.map((param) => params[param] && `${param}=${params[param]}`).join('&');

	return `${base_url + path}/?${combinedParams}&client_id=${client_id}`;
};
