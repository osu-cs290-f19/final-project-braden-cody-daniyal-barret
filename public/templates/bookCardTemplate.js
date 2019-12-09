(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['bookCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col s12 m4 l4 books\">\r\n    <div class=\"card\" data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":30},"end":{"line":2,"column":36}}}) : helper)))
    + ">\r\n        <div class=\"card-image\">\r\n            <img src=\""
    + alias4(((helper = (helper = helpers.photoURL || (depth0 != null ? depth0.photoURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoURL","hash":{},"data":data,"loc":{"start":{"line":4,"column":22},"end":{"line":4,"column":34}}}) : helper)))
    + "\">\r\n            <span class=\"card-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":37},"end":{"line":5,"column":46}}}) : helper)))
    + "</span>\r\n            <div class='rating'><i class='material-icons'>star</i>\r\n                <span></span></div>\r\n        </div>\r\n        <div class=\"card-action\">\r\n            <a href='#' class='waves-effect'><i class=\"material-icons\">add_shopping_cart</i></a>\r\n            <a href='#' class='waves-effect, favorite-button' style=\"float: right\"><i class='material-icons'>favorite</i></a>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
})();