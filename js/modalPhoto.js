const modal = document.getElementById('imageModal')
const modalImg = document.getElementById('modalImage')
const closeBtn = document.querySelector('.close')

document.querySelectorAll('.menu__img-wrapper img').forEach(img => {
	img.addEventListener('click', () => {
		modal.style.display = 'flex'
		modalImg.src = img.src
	})
})

closeBtn.addEventListener('click', () => {
	modal.style.display = 'none'
})

modal.addEventListener('click', e => {
	if (e.target === modal) modal.style.display = 'none'
})
