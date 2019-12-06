(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['add-a-book-modal'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"add-a-book-modal\" class=\"hidden\">\r\n    <div class=\"modal-content\">\r\n        <h4>ADD A BOOK</h4>\r\n        <div class=\"divider\"></div>\r\n        <br>\r\n        <div style=\"padding: 20px;\">\r\n            <div class=\"row\">\r\n                <div class=\"input-field col s12 m6 l6\">\r\n                    <input placeholder=\"Enter Title\" id=\"input-title\" type=\"text\" class=\"validate\">\r\n                    <label for=\"first_name\">Title</label>\r\n                </div>\r\n                <div class=\"input-field col s12 m6 l6\">\r\n                    <input placeholder=\"Enter Author\" id=\"input-author\" type=\"text\" class=\"validate\">\r\n                    <label for=\"first_name\">Author</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"input-field col s12 m6 l6\">\r\n                    <input placeholder=\"Enter Subject\" id=\"input-subject\" type=\"text\" class=\"validate\">\r\n                    <label for=\"first_name\">Subject</label>\r\n                </div>\r\n                <div class=\"input-field col s12 m6 l6\">\r\n                    <input placeholder=\"Enter Photo URL\" id=\"input-photoURL\" type=\"text\" class=\"validate\">\r\n                    <label for=\"first_name\">Photo URL</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"input-field col s12 m6 l6\">\r\n                    <input placeholder=\"Enter Vendor URL\" id=\"input-vendorURL\" type=\"text\" class=\"validate\">\r\n                    <label for=\"first_name\">Vendor URL</label>\r\n                </div>\r\n                <div class=\"input-field col s12 m6 l6\">\r\n                    <input type=\"text\" class=\"datepicker\" id=\"input-date\">\r\n                    <label for=\"first_name\">Published Date</label>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <a href=\"#!\" id=\"cancel-modal-button\" class=\"modal-close waves-effect waves-green btn btn-flat\">Cancel</a>\r\n        <a href=\"#!\" id=\"accept-modal-button\" class=\"modal-close waves-effect waves-green btn btn-flat\">Add Book</a>\r\n    </div>\r\n</div>";
},"useData":true});
})();