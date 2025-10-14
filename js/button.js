const scrollBtn = document.getElementById('scrollTopBtn')

// следим за прокруткой
window.addEventListener('scroll', () => {
	if (window.scrollY > 600) {
		// показать после 600px
		scrollBtn.classList.add('show')
	} else {
		scrollBtn.classList.remove('show')
	}
})

// скролл вверх по клику
scrollBtn.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
})
