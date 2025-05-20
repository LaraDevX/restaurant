export default function slider(
	slidesSelector,
	prevSelector,
	nextSelector,
	totalSelector,
	currentSelector,
	slidesWrapperSelector,
	slidesInnerSelector
) {
	const slides = document.querySelectorAll(slidesSelector),
		prev = document.querySelector(prevSelector),
		next = document.querySelector(nextSelector),
		total = document.querySelector(totalSelector),
		current = document.querySelector(currentSelector),
		slidesWrapper = document.querySelector(slidesWrapperSelector),
		slidesInner = document.querySelector(slidesInnerSelector),
		width = window.getComputedStyle(slidesWrapper).width

	let slideindex = 1,
		offset = 0
	showSlides(slideindex)

	slidesInner.style.width = 100 * slides.length + '%'
	slidesInner.style.display = 'flex'
	slidesInner.style.transition = 'all .5s ease'
	slidesWrapper.style.overflow = 'hidden'

	slides.forEach(slide => {
		slide.style.width = width
	})
	next.addEventListener('click', () => {
		// if(offset === +width.slice(0, width.length - 2) * (slides.length - 1)){
		// 	offset = 0
		// }else{
		// 	offset === +width.slice(0, width.length - 2)
		// }
		slidesInner.style.transform = `translateX(-${offset}px)`
	})
	prev.addEventListener('click', () => {
		// if(offset === 0){
		// 	offset = +width.slice(0, width.length - 2) * (slides.length - 1)
		// }else{
		// 	offset === +width.slice(0, width.length - 2)
		// }
		slidesInner.style.transform = `translateX(-${offset}px)`
	})
	if (slides.length < 10) {
		total.textContent = `0${slides.length}`
	} else {
		total.textContent = slides.length
	}

	function showSlides(index) {
		if (index > slides.length) {
			slideindex = 1
		}
		if (index < 1) {
			slideindex = slides.length
		}
		slides.forEach(slide => (slide.style.display = 'none'))
		slides[slideindex - 1].style.display = 'block'
		if (slides.length < 10) {
			current.textContent = `0${slideindex}`
		} else {
			current.textContent = slideindex
		}
	}
	function moveSlide(index) {
		showSlides((slideindex += index))
	}
	prev.addEventListener('click', () => {
		moveSlide(-1)
	})
	next.addEventListener('click', () => {
		moveSlide(1)
	})
}
