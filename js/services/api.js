const BASE_URL = 'http://localhost:3000'
export default async function getResources(api) {
	try {
		const res = await fetch(BASE_URL + `/${api}`)
		return await res.json()
	} catch (e) {
		console.log(e)
	}
}
