// add filter to have markdownify and inline and set the markdown language for eleventy

const markdownIt = require("markdown-it");
const markdownItPandoc = require("markdown-it-pandoc");

let options = {
  html: true, // Enable HTML tags in source
  linkify: true,
};

// configure the library with options
let md = markdownIt(options).use(markdownItPandoc);

module.exports = function (eleventyConfig, options) {
  eleventyConfig.addFilter("markdownify", function (value) {
    return md.render(value);
  });

  eleventyConfig.addFilter("markdownifyInline", function (value) {
    return md.renderInline(value);
  });
};
