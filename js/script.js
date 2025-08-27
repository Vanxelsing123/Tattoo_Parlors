gsap.to('.header', {
	opacity: 1,
	y: 0,
	duration: 1,
	ease: 'power2.out',
})

gsap.registerPlugin(ScrollTrigger)

gsap.utils.toArray('.studio').forEach(section => {
	gsap.to(section, {
		opacity: 1,
		y: 0,
		duration: 1,
		ease: 'power2.out',
		scrollTrigger: {
			trigger: section,
			start: 'top 80%',
			end: 'top 20%', // когда анимация закончится при скролле вверх
			scrub: true, // синхронизация анимации со скроллом
		},
	})
})
