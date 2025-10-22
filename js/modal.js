document.addEventListener('DOMContentLoaded', () => {
	const buttons = document.querySelectorAll('.open-modal')
	const modal = document.querySelector('#dynamic-modal')
	const modalBody = modal.querySelector('.modal-body')
	const closeBtn = modal.querySelector('.close-modal')

	buttons.forEach(button => {
		button.addEventListener('click', async () => {
			const modalId = button.dataset.modal
			try {
				const response = await fetch(`docs/${modalId}.html`)
				const html = await response.text()
				modalBody.innerHTML = html
				modal.classList.add('modal-open')
				document.body.classList.add('no-scroll')
			} catch (err) {
				console.error('Ошибка:', err)
			}
		})
	})

	closeBtn.addEventListener('click', () => {
		modal.classList.remove('modal-open')
		document.body.classList.remove('no-scroll')
	})

	modal.addEventListener('click', e => {
		if (e.target === modal) {
			modal.classList.remove('modal-open')
			document.body.classList.remove('no-scroll')
		}
	})
})
