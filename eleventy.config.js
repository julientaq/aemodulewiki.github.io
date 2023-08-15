const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

const flax= require("./flax-plugins/flax.js");

// for automatic start of the server

module.exports = function(eleventyConfig) {

  // add base html to every url
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(flax);

  return {
    // templates engines : njk
    markdownTemplateEngine: "njk",

    // set the directories
    dir: {
      input: "src",
      output: "public",
      includes: "layouts",
      data: "data",
    },
  };
};

