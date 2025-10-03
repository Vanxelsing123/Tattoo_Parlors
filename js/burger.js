const burger = document.querySelector('.burger')
const nav = document.querySelector('.navigation')
const body = document.body
const header = document.querySelector('.header')
const links = document.querySelectorAll('.header__link')

// ===== Бургер =====
burger.addEventListener('click', () => {
	burger.classList.toggle('active')
	nav.classList.toggle('active')
	body.classList.toggle('no-scroll', nav.classList.contains('active'))
})

// ===== Скролл хедера =====
window.addEventListener('scroll', () => {
	if (window.scrollY > 50) {
		header.classList.add('scrolled')
	} else {
		header.classList.remove('scrolled')
	}
})

// ===== Логика ссылок =====
links.forEach(link => {
	link.addEventListener('click', e => {
		const href = link.getAttribute('href')

		// Если якорь (#...), то плавный скролл
		if (href.startsWith('#')) {
			e.preventDefault()
			const target = document.querySelector(href)
			if (target) {
				target.scrollIntoView({ behavior: 'smooth' })
			}
		}

		// Закрываем меню только если оно открыто (бургер активен)
		if (nav.classList.contains('active')) {
			nav.classList.remove('active')
			burger.classList.remove('active')
			body.classList.remove('no-scroll')
		}
	})
})
