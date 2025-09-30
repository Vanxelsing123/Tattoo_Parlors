const burger = document.querySelector('.burger')
const nav = document.querySelector('.navigation')
const body = document.body

burger.addEventListener('click', () => {
	burger.classList.toggle('active')
	nav.classList.toggle('active')

	if (nav.classList.contains('active')) {
		body.classList.add('no-scroll')
	} else {
		body.classList.remove('no-scroll')
	}
})

const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
	if (window.scrollY > 50) {
		header.classList.add('scrolled')
	} else {
		header.classList.remove('scrolled')
	}
})

const links = document.querySelectorAll('.header__link')

links.forEach(link => {
	link.addEventListener('click', e => {
		const href = link.getAttribute('href')

		if (href.startsWith('#')) {
			e.preventDefault()
			const target = document.querySelector(href)
			if (target) {
				target.scrollIntoView({ behavior: 'smooth' })
			}

			// закрываем меню после клика
			document.querySelector('.navigation').classList.remove('active')
			document.querySelector('.burger').classList.remove('active')
			document.body.classList.remove('no-scroll')
		}
	})
})
