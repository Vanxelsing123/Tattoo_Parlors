const masters = {
	ekaterina: {
		name: 'САША КОТ',
		title: 'Мастер художественной татуировки',
		description: 'Екатерина практикуется уже больше 5 лет.',
		image: 'images/SashaKot.png',
		works: [
			'images/portfolio/Sasha(1).webp',
			'images/portfolio/Sasha(3).webp',
			'images/portfolio/Sasha(4).webp',
			'images/portfolio/Sasha(5).webp',
			'images/portfolio/Sasha(6).webp',
			'images/portfolio/Sasha(7).webp',
			'images/portfolio/Sasha(8).webp',
			'images/portfolio/Sasha(9).webp',
			'images/portfolio/Sasha(2).webp',
		],
		socials: {
			telegram: '#',
		},
	},

	elizaveta: {
		name: 'Екатерина Максимова',
		title: 'Мастер художественной татуировки',
		description:
			'Создаёт уникальные тату в стиле графика и реализм. Индивидуальный подход к каждому клиенту.',
		image: 'images/EkaterinaMakcim.webp',
		works: [
			'images/portfolio/Ekaterina(8).webp',
			'images/portfolio/Ekaterina(9).webp',
			'images/portfolio/Ekaterina(10).webp',
			'images/portfolio/Ekaterina(11).webp',
			'images/portfolio/Ekaterina(12).webp',
			'images/portfolio/Ekaterina(13).webp',
			'images/portfolio/Ekaterina(14).webp',
			'images/portfolio/Ekaterina(15).webp',
		],
		socials: {
			telegram: '#',
		},
	},

	polina: {
		name: 'Полина Гамова',
		title: 'Мастер художественной татуировки',
		description: 'Создаёт уникальные тату и миниатюры в стиле минимализм и реализм.',
		image: 'images/PolinaGamova.webp',
		works: [
			'images/portfolio/Polina(4).webp',
			'images/portfolio/Polina(5).webp',
			'images/portfolio/Polina(6).webp',
			'images/portfolio/Polina(7).webp',
			'images/portfolio/Polina(8).webp',
			'images/portfolio/Polina(9).webp',
			'images/portfolio/Polina(10).webp',
			'images/portfolio/Polina(11).webp',
		],
		socials: {
			telegram: '#',
		},
	},

	sasha: {
		name: 'Елизавета Петрова',
		title: 'Мастер художественной татуировки',
		description: 'Любит цвет, динамику и креатив. Каждый эскиз уникален и создаётся вручную.',
		image: 'images/ElizavetaPetrova.webp',
		works: [
			'images/portfolio/Liza(1).webp',
			'images/portfolio/Liza(2).webp',
			'images/portfolio/Liza(3).webp',
			'images/portfolio/Liza(4).webp',
			'images/portfolio/Liza(5).webp',
			'images/portfolio/Liza(6).webp',
			'images/portfolio/Liza(7).webp',
		],
		socials: {
			telegram: '#',
		},
	},

	elizavetagrom: {
		name: 'Елизавета Громова',
		title: 'Мастер художественной татуировки',
		description: 'Работает в стиле реализм и акварель. Более 7 лет опыта в тату-индустрии.',
		image: 'images/ElizavetaGrom.webp',
		works: [
			'images/portfolio/Liza-remove(1).webp',
			'images/portfolio/Liza-remove(2).webp',
			'images/portfolio/Liza-remove(3).webp',
			'images/portfolio/Liza-remove(4).webp',
			'images/portfolio/Liza-remove(5).webp',
			'images/portfolio/Liza-remove(6).webp',
			'images/portfolio/Liza-remove(7).webp',
		],
		socials: {
			telegram: '#',
		},
	},
}

const params = new URLSearchParams(window.location.search)
const id = params.get('id')
const container = document.getElementById('portfolio')
const worksContainer = document.getElementById('works')

if (id && masters[id]) {
	const m = masters[id]

	//  Основной блок с информацией
	container.innerHTML = `
		<div class="portfolio-left">
			<img src="${m.image}" alt="${m.name}">
		</div>
		<div class="portfolio-right">
			<h1>Портфолио мастера <span>${m.name.split(' ')[0]}</span></h1>
			<h2>${m.name}</h2>
			<p>${m.title}</p>
			<p>${m.description}</p>
			<a href="${m.socials.telegram}" target="_blank" class="btn">ЗАПИСАТЬСЯ К МАСТЕРУ</a>
		</div>
	`

	// Блок с работами
	let worksHTML = `
		<section class="works">
			<div class="works__grid">
				${m.works.map(src => `<img src="${src}" alt="">`).join('')}
			</div>
		</section>
	`

	worksContainer.innerHTML = worksHTML
} else {
	container.innerHTML = `<p>Мастер не найден</p>`
	worksContainer.innerHTML = ''
}

// === Увеличение фото (модалка) ===
document.addEventListener('click', e => {
	if (e.target.closest('.works__grid img')) {
		const src = e.target.getAttribute('src')
		const modal = document.getElementById('imageModal')
		const modalImg = document.getElementById('modalImage')

		modal.style.display = 'flex'
		modalImg.src = src
		document.body.style.overflow = 'hidden'
	}
})

document.querySelector('.image-modal__close').addEventListener('click', () => {
	const modal = document.getElementById('imageModal')
	modal.style.display = 'none'
	document.body.style.overflow = ''
})

document.getElementById('imageModal').addEventListener('click', e => {
	if (e.target.id === 'imageModal') {
		e.currentTarget.style.display = 'none'
		document.body.style.overflow = ''
	}
})
