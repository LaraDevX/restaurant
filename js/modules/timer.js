export default function timer(deadline, selector) {
	function getTimeRemaining(endTime) {
		let days, hours, minutes, seconds
		const time = Date.parse(endTime) - Date.parse(new Date())
		if (time <= 0) {
			;(days = 0), (hours = 0), (minutes = 0), (seconds = 0)
		} else {
			;(days = Math.floor(time / (1000 * 60 * 60 * 24))),
				(hours = Math.floor((time / (1000 * 60 * 60)) % 24)),
				(minutes = Math.floor((time / (1000 * 60)) % 60)),
				(seconds = Math.floor((time / 1000) % 60))
		}

		return {
			totalTime: time,
			days,
			hours,
			minutes,
			seconds,
		}
	}

	function formatNum(number) {
		if (number >= 0 && number < 10) {
			return `0${number}`
		} else {
			return number
		}
	}

	function setClock(selector, endTime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000)
		updateClock()
		function updateClock() {
			const time = getTimeRemaining(endTime)
			days.textContent = formatNum(time.days)
			hours.textContent = formatNum(time.hours)
			minutes.textContent = formatNum(time.minutes)
			seconds.textContent = formatNum(time.seconds)

			if (time.totalTime <= 0) {
				clearInterval(timeInterval)
			}
		}
	}
	setClock(selector, deadline)
}
