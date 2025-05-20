import { closeModal, openModal } from './modal'
import sendMessageTobot from './sendMessageToBot'
export default function contactForm(
	formSelector,
	modalDialogSelector,
	modalSelector,
	openModalTime
) {
	const form = document.querySelector(formSelector),
		telegramToken = '7549997720:AAHqYSk1YI1F58djHOd43XfasgUup4fcSo4',
		chatId = '5999937350'
	const message = {
		loading: 'Loading...',
		success: 'Thanks for contacting with us',
		error: 'Something went wrong',
	}
	form.addEventListener('submit', event => {
		event.preventDefault()
		// const statusMessage = document.createElement('div')
		// statusMessage.textContent = message.loading
		// statusMessage.classList.add('middle')
		// form.append(statusMessage)
		const formData = new FormData(form)
		const obj = {}

		formData.forEach((value, key) => {
			obj[key] = value
		})
		sendMessageTobot(obj, chatId, telegramToken)
			.then(() => {
				showStatusMessage(message.success)
				form.reset()
			})
			.catch(() => showStatusMessage(message.error))
	})
	function showStatusMessage(mess) {
		const modalDialog = document.querySelector(modalDialogSelector)
		modalDialog.classList.add('hide')
		openModal('.modal__content', '.modal', openModalTime)
		const statusModal = document.createElement('div')
		statusModal.classList.add('modal__dialog')
		statusModal.innerHTML = `
		<div class="modal__content">
			<div data-modal-close class="modal__close">&times;</div>
				<div class="modal__title">${mess}</div>
			</div>
		</div>`

		document.querySelector(modalSelector).append(statusModal)
		setTimeout(() => {
			statusModal.remove()
			modalDialog.classList.remove('hide')
			closeModal('.modal')
		}, 2000)
	}
}
