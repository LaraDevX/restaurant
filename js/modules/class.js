import getResources from '../services/api'

export default function classes() {
	class OfferMenu {
		constructor(src, alt, title, desc, discount, price, parentSelector) {
			this.src = src
			this.alt = alt
			this.title = title
			this.desc = desc
			this.discount = discount
			this.price = price
			this.parent = document.querySelector(parentSelector)
			this.formatPriceToUSD()
		}

		formatPriceToUSD() {
			this.discount = this.discount.toLocaleString('en-US', {
				style: 'currency',
				currency: 'USD',
			})
			this.price = this.price.toLocaleString('en-US', {
				style: 'currency',
				currency: 'USD',
			})
		}
		render() {
			const element = document.createElement('div')
			element.innerHTML = `
			<img src="${this.src}" alt="${this.alt}">
			<div>
				<h3>${this.title}</h3>
				<p>${this.desc}</p>
				<p><del>${this.discount}</del> <span class="primary-text">${this.price}</span></p>
			</div>
			`
			this.parent.append(element)
		}
	}
	class Menu {
		constructor(src, alt, title, desc, price, selector) {
			this.src = src
			this.alt = alt
			this.title = title
			this.desc = desc
			this.price = price
			this.selector = document.querySelector(selector)
			this.formatPrice()
		}
		formatPrice() {
			this.price = this.price.toLocaleString('en-US', {
				style: 'currency',
				currency: 'USD',
			})
		}
		renderMenu() {
			const menuEl = document.createElement('div')
			menuEl.classList.add('menu-item')
			menuEl.innerHTML = `
				<img src="${this.src}" alt="${this.alt}">
				<div>
					<h3>${this.title} <span class="primary-text">${this.price}</span></h3>
					<p>${this.desc}</p>
				</div>
			`
			this.selector.append(menuEl)
		}
	}
	class WorkDay {
		constructor(src, alt, name, time, selector) {
			this.src = src
			this.alt = alt
			this.name = name
			this.time = time
			this.selector = document.querySelector(selector)
		}
		renderWorkDay() {
			const workEl = document.createElement('div')
			workEl.classList.add('daytime-item')
			workEl.innerHTML = `
				<img src="${this.src}" alt="${this.alt}">
				<h3>${this.name}</h3>
				<p>${this.time}</p>
			`
			this.selector.append(workEl)
		}
	}
	getResources('day-time').then(data => {
		data.forEach(work => {
			const { src, alt, name, time, selector } = work
			new WorkDay(src, alt, name, time, selector).renderWorkDay()
		})
	})
	getResources('menu').then(data => {
		data.forEach(menu => {
			const { src, alt, title, desc, price, selector } = menu
			new Menu(src, alt, title, desc, price, selector).renderMenu()
		})
	})
	getResources('offers').then(data => {
		data.forEach(offer => {
			const { src, alt, title, desc, discount, price, parentSelector } = offer
			new OfferMenu(
				src,
				alt,
				title,
				desc,
				discount,
				price,
				parentSelector
			).render()
		})
	})
}
