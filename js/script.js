if (document.querySelector('.neon__text')) {
	// Блокируем клики на время анимации
	document.body.classList.add('neon-page')

	// Начальное состояние (GSAP, а не CSS)
	gsap.set('.header, main > *:not(.neon)', {
		opacity: 0,
		y: 20,
		pointerEvents: 'none',
	})

	// ===== МИГАНИЕ НЕОНА =====
	gsap.fromTo(
		'.neon__text',
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
		// Постоянное свечение
		gsap.to('.neon__text', {
			textShadow:
				'0 0 10px #d538e1, 0 0 20px #d538e1, 0 0 40px #d538e1, 0 0 80px #d538e1, 0 0 160px #d538e1',
			opacity: 1,
			duration: 1,
		})

		// Появление контента
		gsap.to('.header, main > *:not(.neon)', {
			opacity: 1,
			y: 0,
			pointerEvents: 'auto', // 🔥 ВОЗВРАЩАЕМ КЛИКИ
			duration: 1.2,
			ease: 'power2.out',
			stagger: 0.15,
			onComplete: () => {
				document.body.classList.remove('neon-page')
			},
		})
	}
}
