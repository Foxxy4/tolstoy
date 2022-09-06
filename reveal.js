const listElement = document.querySelector('.slider ul.list');
const intersectionObserverElements = document.querySelectorAll('.slider > ul.slider-items > li');
const dots = document.querySelectorAll('.slider > ul.slider-dots > li');

function setActiveDot(selectedIndex) {
	dots.forEach((dot, index) => {
		dot.classList.remove('active');
		if (index === selectedIndex) {
			dot.classList.add('active');
		}
	});
}

let options = {
	root: listElement,
	rootMargin: '0px',
	threshold: [1]
}

let callback = (entries, observer) => {
	entries.forEach(entry => {
		if (entry.intersectionRatio === 1) {
			let dataId = `${entry.target.getAttribute('data-id')}`;
			setActiveDot(parseInt(dataId));
		}
	});
};

let observer = new IntersectionObserver(callback, options);

intersectionObserverElements.forEach((card) => {
	observer.observe(card);
});
