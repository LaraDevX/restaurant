import classes from './modules/class'
import contactForm from './modules/forms'
import loader from './modules/loader'
import modal, { openModal } from './modules/modal'
import slider from './modules/slider'
import tabs from './modules/tabs'
import timer from './modules/timer'

window.addEventListener('DOMContentLoaded', () => {
	const openModalTime = setTimeout(
		() => openModal('.modal__content', '.modal'),
		50000
	)
	tabs('.tabheader__item', '.tab_content', '.tabheader__items')
	loader('.loader-wrapper')
	timer('2026-01-01', '.timer')
	modal('[data-modal]', '.modal', '.modal__content', openModalTime)
	classes()
	contactForm('form', '.modal__dialog', '.modal', openModalTime)
	slider(
		'.offer__slide',
		'.offer__slider-prev',
		'.offer__slider-next',
		'#total',
		'#current',
		'.offer__slider-wrapper',
		'.offer__slider-inner'
	)
})
