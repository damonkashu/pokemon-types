let types = [
  'BUG',
  'DARK',
  'DRAGON',
  'GHOST',
  'GRASS',
  'GROUND',
  'ICE',
  'ELECTRIC',
  'FAIRY',
  'FIGHTING',
  'FIRE',
  'FLYING',
  'NORMAL',
  'POISON',
  'PSYCHIC',
  'ROCK',
  'STEEL',
  'WATER'
];

$(document).ready(function() {
	console.log('ready');

	let typeGrid = Array.from(document.getElementsByClassName('thumb'));

	typeGrid.forEach(function(element, index) {
		let newNode = document.createElement('div');
		newNode.textContent = types[index];
		element.insertBefore(newNode, element.children[0]);
	});

});