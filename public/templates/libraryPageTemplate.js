(function() {
    var template = Handlebars.template,
        templates = Handlebars.templates = Handlebars.templates || {};
    templates['libraryPage'] = template({
        "1": function(container, depth0, helpers, partials, data) {
            var stack1;

            return ((stack1 = container.invokePartial(partials.bookCard, depth0, { "name": "bookCard", "data": data, "indent": "            ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "");
        },
        "compiler": [8, ">= 4.3.0"],
        "main": function(container, depth0, helpers, partials, data) {
            var stack1, helper, alias1 = depth0 != null ? depth0 : (container.nullContext || {}),
                alias2 = container.hooks.helperMissing,
                alias3 = "function",
                alias4 = container.escapeExpression;

            return ((stack1 = container.invokePartial(partials["add-a-book-modal"], depth0, { "name": "add-a-book-modal", "data": data, "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") <<
                << << < HEAD +
                "\n<div class=\"container\">\n    <h4>" +
                container.escapeExpression(((helper = (helper = helpers.pageHeader || (depth0 != null ? depth0.pageHeader : depth0)) != null ? helper : container.hooks.helperMissing), (typeof helper === "function" ? helper.call(alias1, { "name": "pageHeader", "hash": {}, "data": data, "loc": { "start": { "line": 4, "column": 8 }, "end": { "line": 4, "column": 22 } } }) : helper))) +
                "</h4>\n    <div class=\"row books\" id=\"books\">\n" +
                ((stack1 = helpers.each.call(alias1, (depth0 != null ? depth0.books : depth0), { "name": "each", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data, "loc": { "start": { "line": 6, "column": 8 }, "end": { "line": 8, "column": 17 } } })) != null ? stack1 : "") <<
                << << < HEAD +
                "    </div>\n</div>"; ===
            === = +"    </div>\r\n    <div id=\"snackbar\">A book has been added to your favorites!</div>\r\n</div>"; >>>
            >>> > 087 d0dbbe90b2cfe040610401607681fa94913a5
                ===
                === = +"\r\n<div class=\"container\" id=\"content-container\" page=" +
                alias4(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, { "name": "page", "hash": {}, "data": data, "loc": { "start": { "line": 3, "column": 51 }, "end": { "line": 3, "column": 59 } } }) : helper))) +
                ">\r\n    <h4>" +
                alias4(((helper = (helper = helpers.pageHeader || (depth0 != null ? depth0.pageHeader : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, { "name": "pageHeader", "hash": {}, "data": data, "loc": { "start": { "line": 4, "column": 8 }, "end": { "line": 4, "column": 22 } } }) : helper))) +
                "</h4>\r\n    <div class=\"row books\" id=\"books\">\r\n" +
                ((stack1 = helpers.each.call(alias1, (depth0 != null ? depth0.books : depth0), { "name": "each", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data, "loc": { "start": { "line": 6, "column": 8 }, "end": { "line": 8, "column": 17 } } })) != null ? stack1 : "") +
                "    </div>\r\n    <div id=\"snackbar\"></div>\r\n</div>"; >>>
            >>> > cr - libraryAPI
        },
        "usePartial": true,
        "useData": true
    });
})();