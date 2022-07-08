import lestnicy from './lestnicy'
// import galary from './galary'

document.addEventListener('alpine:init', () => {
	Alpine.data('data', () => ({
		phones: [
			{ id: 1, phone: '8 (927) 260 02 77' },
			{ id: 2, phone: '8 (846) 990 02 77' },
		],
		email: 'sammetok@yandex.ru',
		address: 'Самара, ул. Революционная, 101 А',
		lestnicy: lestnicy,
		galary: [
			{url: 'img/about/1.png', thumb: 'img/about/1.png'},
			{url: 'img/about/2.jpg', thumb: 'img/about/2.jpg'},
			{url: 'img/about/3.jpg', thumb: 'img/about/3.jpg'},
			{url: 'img/about/1.png', thumb: 'img/about/1.png'},
			{url: 'img/about/2.jpg', thumb: 'img/about/2.jpg'},
			{url: 'img/about/3.jpg', thumb: 'img/about/3.jpg'},
			{url: 'img/about/1.png', thumb: 'img/about/1.png'},
			{url: 'img/about/2.jpg', thumb: 'img/about/2.jpg'},
		],
		typeModalShow(id) {
			const type = lestnicy.find((t) => t.id === id)
			const title = type.title ? type.title : 'Лестница № ' + type.id
			this.$refs.typeImgLink.href = `img/types/${type.id}.png`
			this.$refs.typeImg.src = `img/types/thumbs/${type.id}.png`
			this.$refs.typeImg.alt = title
			this.$refs.typeTitle.innerText = title
			this.$refs.typeDescr.innerText = type.descr
			this.$refs.typeInputTitle.value = title
			this.$refs.typeForm.reset()
			this.$refs.typeImg.onload = () => {
				Alpine.store('state').isTypeModalOpen = true
				refreshFsLightbox()
			}
		},
		kitcut(text, limit) {
			text = text.trim()
			if (text.length <= limit) return text
			text = text.slice(0, limit)
			let lastSpace = text.lastIndexOf(' ')
			if (lastSpace > 0) {
				text = text.substr(0, lastSpace)
			}
			return text + '...'
		},
	}))
	Alpine.store('state', {
		isModalOpen: false,
		isTypeModalOpen: false,
		isResponseModalOpen: false,
	})
})
