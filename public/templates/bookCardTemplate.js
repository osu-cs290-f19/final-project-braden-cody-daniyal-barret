(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['bookCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col s12 m4 l4 books\">\n    <div class=\"card\" data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":30},"end":{"line":2,"column":36}}}) : helper)))
    + " data-title="
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":2,"column":48},"end":{"line":2,"column":57}}}) : helper)))
    + ">\n        <div class=\"card-image\">\n            <img src=\""
    + alias4(((helper = (helper = helpers.photoURL || (depth0 != null ? depth0.photoURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoURL","hash":{},"data":data,"loc":{"start":{"line":4,"column":22},"end":{"line":4,"column":34}}}) : helper)))
    + "\">\n            <span class='card-title'>\n                <span id='title'>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":6,"column":33},"end":{"line":6,"column":42}}}) : helper)))
    + "</span> <br />\n                <span id='author'>"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":7,"column":34},"end":{"line":7,"column":44}}}) : helper)))
    + "</span>\n            </span>\n\n            <div class='rating'><i class='material-icons'>star</i>\n                <span></span></div>\n        </div>\n        <div class=\"card-action\">\n            <a href='#' class='waves-effect'><i class=\"material-icons\">add_shopping_cart</i></a>\n            <a href='#' class='waves-effect, favorite-button' style=\"float: right\"><i class='material-icons'>favorite</i></a>\n        </div>\n    </div>\n</div>";
},"useData":true});
})();