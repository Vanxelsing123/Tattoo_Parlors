gsap.from('.header.animate', {
	opacity: 1,
	y: -50, // появляется сверху
	duration: 1.2,
	ease: 'power3.out',
})

const directions = ['bottom', 'top', 'left', 'right']

gsap.utils.toArray('.animate').forEach((el, i) => {
	const dir = directions[i % directions.length]

	let fromVars = { opacity: 0 }
	if (dir === 'bottom') fromVars.y = 100
	if (dir === 'top') fromVars.y = -100
	if (dir === 'left') fromVars.x = -100
	if (dir === 'right') fromVars.x = 100

	gsap.from(el, {
		...fromVars,
		opacity: 1,
		x: 0,
		y: 0,
		duration: 1.2,
		ease: 'power3.out',
		delay: i * 0.2, // небольшая задержка между блоками
	})
})
