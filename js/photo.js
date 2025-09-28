const btn = document.querySelector('.portfolio__btn')
const images = document.querySelectorAll('.portfolio__photo-mob img')
let visible = 4 // сколько картинок видно изначально

btn.addEventListener('click', () => {
	visible += 4 // при клике показываем ещё 4
	images.forEach((img, index) => {
		if (index < visible) {
			img.style.display = 'block'
		}
	})

	// если все показаны — скрыть кнопку
	if (visible >= images.length) {
		btn.style.display = 'none'
	}
})
