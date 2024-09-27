const navBtn = document.querySelector('.navbar__btn')
const nav = document.querySelector('.navbar__container')
const allNavItems = document.querySelectorAll('.navbar__nav-link')
const firstLine = document.querySelector('.navbar__btn__bars-firstLine')
const secondLine = document.querySelector('.navbar__btn__bars-secondLine')
const allNavLinks = document.querySelectorAll('.nav-link')
const navHoverLink = document.querySelectorAll('.navbar__nav-hover-link')
const body = document.querySelector('body')

allNavLinks.forEach(i => {
	i.addEventListener('mouseover', e => {
		const dstId = e.target.dataset.dstId
		if (!dstId) return
		const dstEl = document.querySelector('#' + dstId)
		if (!dstEl) return
		dstEl.classList.add('nav-items-animationIcon')
		console.log()
	})

	i.addEventListener('mouseout', e => {
		const dstId = e.target.dataset.dstId
		if (!dstId) return
		const dstEl = document.querySelector('#' + dstId)
		if (!dstEl) return
		dstEl.classList.remove('nav-items-animationIcon')
		console.log()
	})
})

const handleNav = () => {
	firstLine.classList.toggle('firsLine-rotate')
	secondLine.classList.toggle('secondLine-rotate')
	firstLine.classList.toggle('navbarLinesColor')
	secondLine.classList.toggle('navbarLinesColor')
	nav.classList.toggle('navbar__container--active')

	body.classList.toggle('overflow')
	allNavItems.forEach(i => {
		i.addEventListener('click', () => {
			nav.classList.remove('navbar__container--active')
			firstLine.classList.remove('firsLine-rotate')
			secondLine.classList.remove('secondLine-rotate')
			firstLine.classList.remove('navbarLinesColor')
			secondLine.classList.remove('navbarLinesColor')
			body.classList.remove('overflow')
		})
	})
	navHoverLink.forEach(i => {
		i.addEventListener('click', () => {
			console.log(10)
			nav.classList.remove('navbar__container--active')
			firstLine.classList.remove('firsLine-rotate')
			secondLine.classList.remove('secondLine-rotate')
			firstLine.classList.remove('navbarLinesColor')
			secondLine.classList.remove('navbarLinesColor')
			body.classList.remove('overflow')
		})
	})

	handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}
const handleNavItemsAnimationIcon = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation-icon')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

navBtn.addEventListener('click', handleNav)
