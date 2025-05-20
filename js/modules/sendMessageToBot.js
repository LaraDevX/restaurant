export default async function sendMessageTobot(obj, chatId, telegramToken) {
	try {
		const res = await fetch(
			`https://api.telegram.org/bot${telegramToken}/sendMessage`,
			{
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({
					chat_id: chatId,
					text: `Name: ${obj.name}, Phone: ${obj.phone}`,
				}),
			}
		)
		return await res.json()
	} catch (e) {
		console.log(e)
	}
}
