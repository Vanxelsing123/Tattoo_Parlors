document.querySelectorAll('.portfolio__btn').forEach(btn => {
	let container // сюда поместим соответствующий блок с фото

	// Определяем, какая кнопка: портфолио или отзывы
	if (btn.closest('.mob__photo')) {
		container = btn.closest('.mob__photo').querySelector('.portfolio__photo-mob')
	} else if (btn.closest('.reviews__mob')) {
		container = btn.closest('.reviews__mob').querySelector('.reviews__photo--mob')
	}

	if (!container) return // если не нашли контейнер — пропускаем

	const images = container.querySelectorAll('img')
	let visible = 4 // сколько видно изначально

	// Скрываем лишние картинки при загрузке
	images.forEach((img, index) => {
		if (index >= visible) img.style.display = 'none'
	})

	// Клик по кнопке
	btn.addEventListener('click', () => {
		visible += 4

		images.forEach((img, index) => {
			if (index < visible) {
				img.style.display = 'block'
			}
		})

		// Если показаны все — скрываем кнопку
		if (visible >= images.length) {
			btn.style.display = 'none'
		}
	})
})
