(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['bookCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col s12 m4 l4 books\">\r\n    <div class=\"card\" data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":30},"end":{"line":2,"column":36}}}) : helper)))
    + " data-title=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":2,"column":49},"end":{"line":2,"column":58}}}) : helper)))
    + "\" data-author=\""
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":2,"column":73},"end":{"line":2,"column":83}}}) : helper)))
    + "\" data-subject=\""
    + alias4(((helper = (helper = helpers.subject || (depth0 != null ? depth0.subject : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subject","hash":{},"data":data,"loc":{"start":{"line":2,"column":99},"end":{"line":2,"column":110}}}) : helper)))
    + "\" data-vendorURL=\""
    + alias4(((helper = (helper = helpers.vendorURL || (depth0 != null ? depth0.vendorURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vendorURL","hash":{},"data":data,"loc":{"start":{"line":2,"column":128},"end":{"line":2,"column":141}}}) : helper)))
    + "\" data-favorite="
    + alias4(((helper = (helper = helpers.favorite || (depth0 != null ? depth0.favorite : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"favorite","hash":{},"data":data,"loc":{"start":{"line":2,"column":157},"end":{"line":2,"column":169}}}) : helper)))
    + ">\r\n        <div class=\"card-image\">\r\n            <img src=\""
    + alias4(((helper = (helper = helpers.photoURL || (depth0 != null ? depth0.photoURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoURL","hash":{},"data":data,"loc":{"start":{"line":4,"column":22},"end":{"line":4,"column":34}}}) : helper)))
    + "\">\r\n            <span class='card-title'>\r\n                <span id='title'>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":6,"column":33},"end":{"line":6,"column":42}}}) : helper)))
    + "</span> <br />\r\n                <span id='author'>"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":7,"column":34},"end":{"line":7,"column":44}}}) : helper)))
    + "</span>\r\n            </span>\r\n\r\n            <div class='rating'></i>\r\n                <span></span></div>\r\n        </div>\r\n        <div class=\"card-action\">\r\n            <a href='"
    + alias4(((helper = (helper = helpers.vendorURL || (depth0 != null ? depth0.vendorURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vendorURL","hash":{},"data":data,"loc":{"start":{"line":14,"column":21},"end":{"line":14,"column":34}}}) : helper)))
    + "' target=\"_blank\" class='waves-effect'><i class=\"material-icons\">add_shopping_cart</i></a>\r\n            <a href='#!' class=\"waves-effect, edit-button\"><i class='material-icons'>edit</i></a>\r\n            <a href='#!' class='waves-effect favorite-button'><i class='material-icons'>favorite</i></a>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
})();