"use strict";

var postcss = require("postcss");
var postcssrc = require("postcss-load-config");

function renderer(data) {
  return postcssrc()
    .then(({ plugins, options }) =>
      postcss(plugins).process(data.text, options)
    )
    .then((result) => result.css);
}

hexo.extend.renderer.register("css", "css", renderer);

var pagination = require("hexo-pagination");
hexo.extend.generator.register("episodes", function (locals) {
  return pagination("episodes", locals.posts, {
    perPage: 5,
    format: "page/%d/",
    layout: ["episodes", "index"],
    data: {},
  });
});
