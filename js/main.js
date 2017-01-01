$(function () {
  // Grab the template script
  var theTemplateScript = $('#type-grid').html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  let types = [];
  for (var key in typeNames) {
    types.push(typeNames[key].identifier.toUpperCase());
  }

  // Define our data object
  var context = {
    'pokemonTypes': types
  };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('#type-row').append(theCompiledHtml);
});
