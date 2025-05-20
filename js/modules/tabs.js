export default function tabs(tabsSelector, tabContentSelector, tabParentSelector) {
	const tabs = document.querySelectorAll(tabsSelector),
		tabContents = document.querySelectorAll(tabContentSelector),
		tabParent = document.querySelector(tabParentSelector)
	hideContents()
	showTabContent()
	function hideContents() {
		tabContents.forEach(content => {
			content.classList.add('hide')
			content.classList.remove('show')
		})
		tabs.forEach(tab => {
			tab.classList.remove('tabheader__item_active')
		})
	}
	function showTabContent(index = 0) {
		tabContents[index].classList.add('show', 'fade')
		tabContents[index].classList.remove('hide')
		tabs[index].classList.add('tabheader__item_active')
	}
	tabParent.addEventListener('click', event => {
		const target = event.target
		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((tab, index) => {
				if (target === tab) {
					hideContents()
					showTabContent(index)
				}
			})
		}
	})
}
