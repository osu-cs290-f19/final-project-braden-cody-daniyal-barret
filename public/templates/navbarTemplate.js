(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['navbar'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<nav class='navbar-fixed'>\n    <div class=\"nav-wrapper\">\n\n        <a href=\"#\" class=\"brand-logo\">OSU <span>BookTracker</span></a>\n\n        <button id=\"add-a-book-button\" class=\"waves-effect waves-light btn right modal-trigger\"\n            data-target=\"add-book\">ADD A BOOK</button>\n        <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n            <li><a href=\"/\" class=\"waves-effect\">Home</a></li>\n            <li><a href=\"/favorites\" class=\"waves-effect\"><i class=\"material-icons\">favorite</i></a></li>\n        </ul>\n        <a href=\"#\">\n            <div class=\"input-field right search\">\n                <input id=\"search\" type=\"text\" onkeydown=\"keyPress(event)\" required>\n                <i class=\"material-icons\">close</i>\n            </div>\n        </a>\n    </div>\n</nav>";
},"useData":true});
})();