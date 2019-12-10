(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['add-a-book-modal'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"add-a-book-modal\" class=\"hidden\">\n    <div class=\"modal-content\">\n        <h4>ADD A BOOK</h4>\n        <div class=\"divider\"></div>\n        <br>\n        <div style=\"padding: 20px;\">\n            <div class=\"row\">\n                <div class=\"input-field col s12 m6 l6\">\n                    <input placeholder=\"Enter Title\" id=\"input-title\" type=\"text\" class=\"validate\">\n                    <label for=\"first_name\">Title</label>\n                </div>\n                <div class=\"input-field col s12 m6 l6\">\n                    <input placeholder=\"Enter Author\" id=\"input-author\" type=\"text\" class=\"validate\">\n                    <label for=\"first_name\">Author</label>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"input-field col s12 m6 l6\">\n                    <input placeholder=\"Enter Subject\" id=\"input-subject\" type=\"text\" class=\"validate\">\n                    <label for=\"first_name\">Subject</label>\n                </div>\n                <div class=\"input-field col s12 m6 l6\">\n                    <input placeholder=\"Enter Photo URL\" id=\"input-photoURL\" type=\"text\" class=\"validate\">\n                    <label for=\"first_name\">Photo URL</label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <a href=\"#!\" id=\"cancel-modal-button\" class=\"modal-close waves-effect waves-green btn btn-flat\">Cancel</a>\n        <a href=\"#!\" id=\"accept-modal-button\" class=\"modal-close waves-effect waves-green btn btn-flat\">Add Book</a>\n    </div>\n</div>";
},"useData":true});
})();