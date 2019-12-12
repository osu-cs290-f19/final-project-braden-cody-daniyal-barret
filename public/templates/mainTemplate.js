(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['main'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <title>OSU BookTracker</title>\r\n    <!-- Compiled and minified CSS -->\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\r\n    <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n    <link href=\"./style.css\" rel=\"stylesheet\">\r\n\r\n    <script type='text/javascript' src='//cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.3.0/handlebars.js'></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n    <script src=\"./templates/mainTemplate.js\"></script>\r\n    <script src=\"./templates/add-a-book-modal-template.js\"></script>\r\n    <script src=\"./templates/bookCardTemplate.js\"></script>\r\n    <script src=\"./templates/libraryPageTemplate.js\"></script>\r\n    <script src=\"./templates/navbarTemplate.js\"></script>\r\n    <script src=\"./templates/404pageTemplate.js\"></script>\r\n    <script src=\"./main.js\"></script>\r\n\r\n\r\n</head>\r\n\r\n<body>\r\n\r\n"
    + ((stack1 = container.invokePartial(partials.navbar,depth0,{"name":"navbar","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n    "
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"body","hash":{},"data":data,"loc":{"start":{"line":31,"column":4},"end":{"line":31,"column":14}}}) : helper))) != null ? stack1 : "")
    + "\r\n\r\n</body>\r\n\r\n</html>";
},"usePartial":true,"useData":true});
})();