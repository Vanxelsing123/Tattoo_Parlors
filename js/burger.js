const burger = document.querySelector('.burger')
const nav = document.querySelector('.navigation')
const body = document.body

burger.addEventListener('click', () => {
	burger.classList.toggle('active')
	nav.classList.toggle('active')
	body.classList.toggle('no-scroll')
})
