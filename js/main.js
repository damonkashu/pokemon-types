$(function () {
  // Grab the template script
  var theTemplateScript = $('#type-grid').html();

  Handlebars.registerHelper('uppercase', function(options) {
    return options.fn(this).toUpperCase();
  });

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  let types = [];
  for (var key in typeNames) {
    types.push(typeNames[key].identifier.toUpperCase());
  }

  // Define our data object
  var context = {
    'typeNames': typeNames
  };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('#type-row').append(theCompiledHtml);
});
