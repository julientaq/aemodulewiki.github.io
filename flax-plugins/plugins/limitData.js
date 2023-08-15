module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("limit", function(array, first, limit) {
    return array.slice(first ? first : 0, limit);
  });
};
