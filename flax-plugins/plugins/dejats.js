module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("dejats", function(content) {
    if (!content) return "";
    cleanedContent = content
      .replace("<jats:p>", "<p>")
      .replace("</jats:p>", "</p>");
    return cleanedContent;
  });
};
