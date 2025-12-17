const masters = {
	sasha: {
		name: 'САША КОТ',
		title: `основатель студии, мастер художественной татуировки, стили:
графика, Япония, орнаментал`,
		description: `
Топ 5 фактов:

Первый российский рекордсмен гинесса в татуировке

12 лет в профессии и снова меняю стиль, потому что не могу стоять на месте

Считаю что знаниями нужно делиться, поэтому запустил крупнейшую школу татуировки в России

Работаю одновременно в 5 городах страны и не собираюсь останавливаться

Настолько обожаю татуировки что сам почти весь забился с ног до головы
    `,
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
		socials: { telegram: 'https://vk.com/kolnya' },
	},

	ekaterina: {
		name: 'Екатерина Максимова',
		title: `Директор студии, мастер художественной татуировки, стили: 
    
мини-тату, ботаника, графика`,
		description: `Топ 5 фактов: 

      Самые тонкие татуировки на диком северо-западе

      Работаю за троих и не устаю, потому что горю делом

Строю дом

Держу дома змей

5 лет обучаю мастеров
      `,
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
			telegram: 'https://vk.com/kolnya',
		},
	},

	polina: {
		name: 'Полина Быченя',
		title: 'Мастер художественной татуировки, стили: традиционная татуировка, олдскул, неотрад',
		description: `Топ 5 фактов:
    
    Живу с птицеедами

Готовлю как Юлия Высоцкая

Знаю миллиард культовых мемов

Цветные татуировки люблю больше черно-белых

Иногда занимаюсь музыкой
    `,
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
			telegram: 'https://vk.com/kolnya',
		},
	},

	elizaveta: {
		name: 'Елизавета Петрова',
		title: 'Старший мастер художественной татуировки, стили: реализм, графика',
		description: `Топ 5 фактов:
    
    Постоянно рисую с 10 лет

Учу два языка - английский и японский

В татуировке больше 7 лет

У меня 7 домашних животных

Работаю в 3 городах страны
    `,
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
			telegram: 'https://vk.com/kolnya',
		},
	},

	elizavetagrom: {
		name: 'Елизавета Громова',
		title: 'Мастер удаления татуировок, перманентного макияжа, татуажа',
		description: `Топ 5 фактов:
    
    2 медицинских образования

Опыт работы более 6 лет

В работе мощный стационарный неодимовый лазер и криоустановка

Фанат своего дела

Просто хороший человек
    `,
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
			telegram: 'https://vk.com/kolnya',
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
			<p class="description">${m.description}</p>
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
