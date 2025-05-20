function openModal(modalContentSelector, modalSelector, openModalTime) {
	const modalContent = document.querySelector(modalContentSelector),
		modal = document.querySelector(modalSelector)
	modalContent.classList.add('modal-fade')
	modal.classList.add('show')
	modal.classList.remove('hide')
	document.body.style.overflow = 'hidden'

	//agar foydalanuvchi uje modalni ochib korgan bolsa intervalni tozalab tashimz shunda malum bir sekunddan keyin modal ochilmidi
	if (openModalTime) {
		clearInterval(openModalTime)
	}
}
function closeModal(modalSelector) {
	const modal = document.querySelector(modalSelector)
	modal.classList.add('hide')
	modal.classList.remove('show')
	document.body.style.overflow = ''
}
export default function modal(
	modalOpenBtnsSelector,
	modalSelector,
	modalContentSelector,
	openModalTime
) {
	const modalOpenBtns = document.querySelectorAll(modalOpenBtnsSelector),
		modal = document.querySelector(modalSelector)
	// modalContent = document.querySelector(modalContentSelector)

	modalOpenBtns.forEach(btn => {
		btn.addEventListener('click', () =>
			openModal(modalContentSelector, modalSelector, openModalTime)
		)
	})

	modal.addEventListener('click', event => {
		if (
			event.target == modal ||
			event.target.getAttribute('data-modal-close') === ''
		) {
			closeModal(modalSelector)
		}
	})

	//escapenibosgandayam modalni yopish uchun
	document.addEventListener('keydown', event => {
		if (event.code === 'Escape' && modal.classList.contains('show')) {
			closeModal(modalSelector)
		}
	})

	//user saytga kirgandan 2 sekunddan keyin modal chiqadi xohlasa uni yopb qoyadi xohlasa toldiradi
}
export { closeModal, openModal }
