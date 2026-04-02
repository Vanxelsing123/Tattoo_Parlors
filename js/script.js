const overlay = document.getElementById('neon-overlay')

if (overlay) {
	document.body.classList.add('neon-page')

	gsap.set('.header, main > *', {
		opacity: 0,
		y: 20,
		pointerEvents: 'none',
	})

	gsap.fromTo(
		'#neon-overlay .neon__text',
		{
			opacity: 1,
			textShadow: '0 0 10px #d538e1, 0 0 20px #d538e1, 0 0 40px #d538e1',
		},
		{
			keyframes: [
				{ opacity: 0.3, textShadow: 'none', duration: 0.2 },
				{ opacity: 1, textShadow: '0 0 20px #d538e1, 0 0 40px #d538e1', duration: 0.3 },
				{ opacity: 0.5, textShadow: 'none', duration: 0.2 },
				{ opacity: 1, textShadow: '0 0 40px #d538e1, 0 0 80px #d538e1', duration: 0.3 },
				{ opacity: 0.2, textShadow: 'none', duration: 0.2 },
				{ opacity: 1, textShadow: '0 0 60px #d538e1, 0 0 120px #d538e1', duration: 0.5 },
			],
			ease: 'power2.inOut',
			onComplete: showContent,
		}
	)

	function showContent() {
		gsap.to('#neon-overlay .neon__text', {
			textShadow:
				'0 0 10px #d538e1, 0 0 20px #d538e1, 0 0 40px #d538e1, 0 0 80px #d538e1, 0 0 160px #d538e1',
			opacity: 1,
			duration: 0.8,
			onComplete: () => {
				gsap.to(overlay, {
					opacity: 0,
					duration: 1,
					onComplete: () => {
						overlay.remove()
						document.body.classList.remove('neon-page')
					},
				})

				gsap.to('.header, main > *', {
					opacity: 1,
					y: 0,
					pointerEvents: 'auto',
					duration: 1.2,
					ease: 'power2.out',
					stagger: 0.15,
				})
			},
		})
	}
}
