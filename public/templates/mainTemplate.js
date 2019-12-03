(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['main'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <title>OSU BookTracker</title>\r\n    <!-- Compiled and minified CSS -->\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\r\n    <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n    <link href=\"./style.css\" rel=\"stylesheet\">\r\n\r\n    <script type='text/javascript' src='//cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.3.0/handlebars.js'></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n    <script src=\"./templates/mainTemplate.js\"></script>\r\n    <script src=\"./templates/add-a-book-modal-template.js\"></script>\r\n    <script src=\"./templates/bookCardTemplate.js\"></script>\r\n    <script src=\"./templates/libraryPageTemplate.js\"></script>\r\n    <script src=\"./main.js\"></script>\r\n\r\n\r\n</head>\r\n\r\n<body>\r\n    <div class=\"navbar-fixed\">\r\n    <nav>\r\n        <div class=\"nav-wrapper\">\r\n\r\n            <a href=\"#\" class=\"brand-logo\">OSU <span>BookTracker</span></a>\r\n\r\n            <button class=\"waves-effect waves-light btn right modal-trigger\" data-target=\"add-book\"> ADD A BOOK\r\n            </button>\r\n            <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\r\n                <li><a href=\"#\" class=\"waves-effect\">Account</a></li>\r\n                <li><a href=\"#\" class=\"waves-effect\"><i class=\"material-icons\">favorite</i></a></li>\r\n                <li><a href=\"#\" class=\"waves-effect\"><i class=\"material-icons\">add_shopping_cart</i></a></li>\r\n            </ul>\r\n            <a href=\"#\">\r\n                <div class=\"input-field right search\">\r\n                    <input id=\"search\" type=\"search\" required>\r\n                    <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\r\n                    <i class=\"material-icons\">close</i>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </nav>\r\n</div>\r\n\r\n<ul id=\"slide-out\" class=\"sidenav\">\r\n    <li style=\"height: 100px;\">\r\n        <div class=\"user-view\">\r\n            <div class=\"background\" style=\"height: 100px; background: black; padding: 10px;\">\r\n            </div>\r\n            <a href=\"#\" class=\"sidenav-logo\">OSU <span>BookTracker</span></a>\r\n        </div>\r\n    </li>\r\n    <li><a href=\"#\" class=\"waves-effect\">Account<i class=\"material-icons\">account_circle</i> </a></li>\r\n    <li><a href=\"#\" class=\"waves-effect\">Favourites<i class=\"material-icons\">favorite</i></a></li>\r\n    <li><a href=\"#\" class=\"waves-effect\">Cart<i class=\"material-icons\">add_shopping_cart</i></a></li>\r\n</ul>\r\n\r\n    "
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"body","hash":{},"data":data,"loc":{"start":{"line":63,"column":4},"end":{"line":63,"column":14}}}) : helper))) != null ? stack1 : "")
    + "\r\n\r\n</body>\r\n\r\n</html>";
},"useData":true});
})();