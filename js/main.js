function pokemonSelectHandler(event) {
  let imgNode = document.getElementById(event.target.dataset.type + '-img');
  let pokemonName = pokemonData[event.target.value].identifier;
  imgNode.src = 'sprites/' + pokemonName + '.gif';
}

$(function () {
  // Grab the template script
  var theTemplateScript = $('#type-grid').html();

  Handlebars.registerHelper('uppercase', function(options) {
    return options.fn(this).toUpperCase();
  });

  Handlebars.registerHelper('pokemonFromId', function(id) {
    return pokemonData[id].identifier;
  });

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  for (var id in pokemonData) {
    pokemonData[id].types.forEach(function(type) {
      if (!typeNames[type]['pokemon']) {
        typeNames[type]['pokemon'] = [];
      }
      typeNames[type].pokemon.push(id);
    });
  }

  // Define our data object
  var context = {
    'typeNames': typeNames,
    'pokemonData': pokemonData
  };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('#type-row').append(theCompiledHtml);
});
