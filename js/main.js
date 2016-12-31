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

$(function () {
  // Grab the template script
  var theTemplateScript = $('#type-grid').html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Define our data object
  var context = {
    'pokemonTypes': types
  };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('#type-row').append(theCompiledHtml);
});
