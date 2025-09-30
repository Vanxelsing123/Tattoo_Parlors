/* // === регистрация плагина ===
gsap.registerPlugin(ScrollTrigger)

gsap.utils.toArray('#masters .master__li').forEach((el, i) => {
	gsap.from(el, {
		scrollTrigger: {
			trigger: el,
			start: 'top 80%',
		},
		x: 100,
		opacity: 0,
		duration: 1,
		ease: 'power3.out',
		delay: i * 0.2,
	})
})

// === кнопка (zoom) ===
gsap.utils
	.toArray('.master__text, .text__master, .title__master, .title__portfolio, .title__text')
	.forEach((el, i) => {
		gsap.from(el, {
			scrollTrigger: {
				trigger: el,
				start: 'top 85%',
				toggleActions: 'play reverse play reverse',
			},
			scale: 0.5,
			opacity: 0,
			duration: 0.8,
			ease: 'back.out(1.7)',
			delay: i * 0.05, // лёгкий локальный стагер
		})
	})

gsap.utils.toArray('.portfolio__photo-mob img').forEach((img, i) => {
	gsap.from(img, {
		scrollTrigger: {
			trigger: img,
			start: 'top 85%', // когда верх картинки дошёл до 85% окна
		},
		x: -100, // слева
		opacity: 0,
		duration: 1,
		ease: 'power3.out',
		delay: i * 0.1, // лёгкий стагер
	})
})
 */
