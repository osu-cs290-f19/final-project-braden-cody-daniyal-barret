(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['navbar'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<nav class='navbar-fixed'>\r\n    <div class=\"nav-wrapper\">\r\n\r\n        <a href=\"#\" class=\"brand-logo\">OSU <span>BookTracker</span></a>\r\n\r\n        <button id=\"add-a-book-button\" class=\"waves-effect waves-light btn right modal-trigger\"\r\n            data-target=\"add-book\">ADD A BOOK</button>\r\n        <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\r\n            <li><a href=\"/\" class=\"waves-effect\">Home</a></li>\r\n            <li><a href=\"/favorites\" class=\"waves-effect\"><i class=\"material-icons\">favorite</i></a></li>\r\n        </ul>\r\n        <a href=\"#\">\r\n            <div class=\"input-field right search\">\r\n                <input id=\"search\" type=\"search\" required>\r\n                <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\r\n                <i class=\"material-icons\">close</i>\r\n            </div>\r\n        </a>\r\n    </div>\r\n</nav>";
},"useData":true});
})();