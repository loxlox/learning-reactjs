
async function FetchApi(url, method, payload) {
	const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

	return response.json();
}

export default FetchApi;