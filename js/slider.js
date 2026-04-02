;(function () {
	const slider = document.querySelector('.hero-slider')
	if (!slider) return

	const slides = slider.querySelectorAll('.slider__slide')
	const dots = slider.querySelectorAll('.slider__dot')
	const prevBtn = slider.querySelector('.slider__btn--prev')
	const nextBtn = slider.querySelector('.slider__btn--next')
	let current = 0
	let timer

	function goTo(index) {
		slides[current].classList.remove('active')
		dots[current].classList.remove('active')
		current = (index + slides.length) % slides.length
		slides[current].classList.add('active')
		dots[current].classList.add('active')
	}

	function autoplay() {
		timer = setInterval(() => goTo(current + 1), 4000)
	}

	function resetAutoplay() {
		clearInterval(timer)
		autoplay()
	}

	prevBtn.addEventListener('click', () => {
		goTo(current - 1)
		resetAutoplay()
	})

	nextBtn.addEventListener('click', () => {
		goTo(current + 1)
		resetAutoplay()
	})

	dots.forEach((dot, i) =>
		dot.addEventListener('click', () => {
			goTo(i)
			resetAutoplay()
		})
	)

	autoplay()
})()
