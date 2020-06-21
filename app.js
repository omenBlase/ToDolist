const btn = document.querySelector('button');
const txtAdd = document.querySelector('input');
const element = document.createElement('addto');

const addElement = function() {
	console.log('klik');
	document.body.appendChild('element');
	// const div = document.create('div');
	element.textContent = txtAdd;
	element.style.display = 'block';
};
btn.addEventListener('click', addElement);
