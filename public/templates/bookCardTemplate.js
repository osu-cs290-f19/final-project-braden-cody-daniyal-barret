(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['bookCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col s12 m4 l4 books\">\r\n    <div class=\"card\" data-title='"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":2,"column":34},"end":{"line":2,"column":43}}}) : helper)))
    + "' data-price='"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":2,"column":57},"end":{"line":2,"column":66}}}) : helper)))
    + "' data-author='"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":2,"column":81},"end":{"line":2,"column":91}}}) : helper)))
    + "' data-subject='"
    + alias4(((helper = (helper = helpers.subject || (depth0 != null ? depth0.subject : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subject","hash":{},"data":data,"loc":{"start":{"line":2,"column":107},"end":{"line":2,"column":118}}}) : helper)))
    + "' data-date='"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":2,"column":131},"end":{"line":2,"column":139}}}) : helper)))
    + "'></div>\r\n        <div class=\"card-image\">\r\n            <img src=\""
    + alias4(((helper = (helper = helpers.photoURL || (depth0 != null ? depth0.photoURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoURL","hash":{},"data":data,"loc":{"start":{"line":4,"column":22},"end":{"line":4,"column":34}}}) : helper)))
    + "\">\r\n            <span class=\"card-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":37},"end":{"line":5,"column":46}}}) : helper)))
    + "</span>\r\n            <div class='rating'><i class='material-icons'>star</i>\r\n                <span></span></div>\r\n        </div>\r\n        <div class=\"card-action\">\r\n            <a href='#' class='waves-effect '><i class=\"material-icons\">add_shopping_cart</i></a>\r\n            <a href='#' class='waves-effect' style=\"float: right\"><i class='material-icons'>favorite</i></a>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
})();