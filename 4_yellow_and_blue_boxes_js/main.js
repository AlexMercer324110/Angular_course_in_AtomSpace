'use strict'

const boxes = document.getElementById('boxes')
const classes = ['yellow', 'blue']
let classesIndex = 0

for (let i = 0; i < 16; i++) {
	const el = document.createElement('div')
	el.classList.add('box')
	boxes.append(el)
}

const paint = ($event) => {
	if (!$event.srcElement.classList.contains('yellow') && !$event.srcElement.classList.contains('blue')){
		$event.srcElement.classList.add(classes[classesIndex++ % classes.length])
	}
}

for (let box of boxes.childNodes) {
	box.onclick = paint
}