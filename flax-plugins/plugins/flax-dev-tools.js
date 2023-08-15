const inspect = require("util").inspect;

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter(
    "debug",
    (content) => `<pre>${inspect(content)}</pre>`
  );
};
