const btn = document.querySelector('button');
const txtAdd = document.getElementById('lname');
const element = document.querySelector('addto');
const addElement = function() {
	console.log('klik');

	// const div = document.create('div');
	// element.textContent = txtAdd;
	element.style.display = 'block';
};
btn.addEventListener('click', addElement);
