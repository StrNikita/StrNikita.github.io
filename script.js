const checkboxes = document.querySelectorAll('.menu-checkbox');
const test = document.getElementById('test');

checkboxes.forEach(el => {
	el.addEventListener('click', (event) => {
		el.checked ? showElements(el) : hideElements(el);
	});
})

function showElements(el) {
	// const div = createDiv(el.id);
	const img = addImg(el.id);
	test.appendChild(img);
}

function hideElements(checkbox) {
	const itemImgs = document.querySelectorAll('.item-img');
	itemImgs.forEach(el => {
		if (el.classList[1] === checkbox.id) {
			el.remove();
		}
	})
}

function createDiv(path) {
	const div = document.createElement('div');
	div.className = `item-img ${path}`;
	return div;
}

function addImg(path) {
	const image = document.createElement('img');
	image.className = `item-img ${path}`;
	image.src = `./images/${path}`;
	return image;
	// div.appendChild(image);
}
