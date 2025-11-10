const masters = {
	ekaterina: {
		name: 'Екатерина Максимова',
		title: 'Мастер художественной татуировки',
		description: 'Екатерина практикуется уже больше 5 лет.',
		image: 'images/Ekaterina_master.png',
		works: [
			'images/tatu/tatu.png',
			'images/tatu/tatu (2).png',
			'images/tatu/tatu (3).png',
			'images/tatu/tatu (4).png',
			'images/tatu/tatu (5).png',
			'images/tatu/tatu (6).png',
			'images/tatu/tatu (7).png',
			'images/tatu/tatu (8).png',
			'images/tatu/tatu (9).png',
			'images/tatu/tatu (10).png',
		],
		socials: {
			telegram: '#',
		},
	},

	elizaveta: {
		name: 'Елизавета Петрова',
		title: 'Мастер художественной татуировки',
		description:
			'Создаёт уникальные тату в стиле графика и реализм. Индивидуальный подход к каждому клиенту.',
		image: 'images/Elizaveta_master.png',
		works: [
			'images/works/elizaveta1.jpg',
			'images/works/elizaveta2.jpg',
			'images/works/elizaveta3.jpg',
			'images/works/elizaveta4.jpg',
			'images/works/elizaveta5.jpg',
			'images/works/elizaveta6.jpg',
			'images/works/elizaveta7.jpg',
			'images/works/elizaveta8.jpg',
			'images/works/elizaveta9.jpg',
			'images/works/elizaveta10.jpg',
		],
		socials: {
			telegram: '#',
		},
	},

	polina: {
		name: 'Полина Гамова',
		title: 'Мастер художественной татуировки',
		description: 'Создаёт уникальные тату и миниатюры в стиле минимализм и реализм.',
		image: 'images/Polina_master.png',
		works: [
			'images/works/polina1.jpg',
			'images/works/polina2.jpg',
			'images/works/polina3.jpg',
			'images/works/polina4.jpg',
			'images/works/polina5.jpg',
			'images/works/polina6.jpg',
			'images/works/polina7.jpg',
			'images/works/polina8.jpg',
			'images/works/polina9.jpg',
			'images/works/polina10.jpg',
		],
		socials: {
			telegram: '#',
		},
	},

	sasha: {
		name: 'Саша Кот',
		title: 'Мастер художественной татуировки',
		description: 'Любит цвет, динамику и креатив. Каждый эскиз уникален и создаётся вручную.',
		image: 'images/Sasha_master.png',
		works: [
			'images/works/sasha1.jpg',
			'images/works/sasha2.jpg',
			'images/works/sasha3.jpg',
			'images/works/sasha4.jpg',
			'images/works/sasha5.jpg',
			'images/works/sasha6.jpg',
			'images/works/sasha7.jpg',
			'images/works/sasha8.jpg',
			'images/works/sasha9.jpg',
			'images/works/sasha10.jpg',
		],
		socials: {
			telegram: '#',
		},
	},

	elizavetagrom: {
		name: 'Елизавета Громова',
		title: 'Мастер художественной татуировки',
		description: 'Работает в стиле реализм и акварель. Более 7 лет опыта в тату-индустрии.',
		image: 'images/Elizaveta_grom.png',
		works: [
			'images/works/grom1.jpg',
			'images/works/grom2.jpg',
			'images/works/grom3.jpg',
			'images/works/grom4.jpg',
			'images/works/grom5.jpg',
			'images/works/grom6.jpg',
			'images/works/grom7.jpg',
			'images/works/grom8.jpg',
			'images/works/grom9.jpg',
			'images/works/grom10.jpg',
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
