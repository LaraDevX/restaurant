export default function loader(loaderWrapperSelector) {
	const loaderWrapper = document.querySelector(loaderWrapperSelector)
	setTimeout(() => {
		loaderWrapper.style.display = 'none'
	}, 2000)
}
