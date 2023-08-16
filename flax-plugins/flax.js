const flaxcss = require("./plugins/flax-css.js");
const config = require("./plugins/flax-configuration.js");
const collections = require("./plugins/flax-collections.js");
const parseDate = require("./plugins/flax-date.js");
const markdownify = require("./plugins/flax-markdown.js");
const flaxaudio = require("./plugins/flax-audio.js");

const limitData = require("./plugins/limitData.js");
const dateWrangler = require("./plugins/dateWrangler.js");
const markdownifying = require("./plugins/markdownify.js");
const reorderBlock = require("./plugins/reorderBlock.js");
const dejats = require("./plugins/dejats.js");
const groupby = require("./plugins/groupby.js");
const dev = require("./plugins/flax-dev-tools.js");
const allmeta = require("./plugins/flax-get-all-meta.js");

const lightningCSS = require("@11tyrocks/eleventy-plugin-lightningcss");


module.exports = function(eleventyConfig, options) {


  // experimenting some new css way
  eleventyConfig.addPlugin(lightningCSS);

  //dev tools
  eleventyConfig.addPlugin(dev);

  //allmeta tools
  eleventyConfig.addPlugin(allmeta);

  //css
  eleventyConfig.addPlugin(flaxaudio);

  //set base config
  eleventyConfig.addPlugin(config);

  //css
  // eleventyConfig.addPlugin(flaxcss);

  // add the date plugins
  eleventyConfig.addPlugin(parseDate);

  // add the markdown options plugins
  eleventyConfig.addPlugin(markdownify);

  // set collections
  eleventyConfig.addPlugin(collections);

  // modules from elife thingy

  eleventyConfig.addPlugin(limitData);
  eleventyConfig.addPlugin(dateWrangler);
  eleventyConfig.addPlugin(markdownifying);
  eleventyConfig.addPlugin(reorderBlock);
  eleventyConfig.addPlugin(dejats);
  eleventyConfig.addPlugin(groupby);
};
