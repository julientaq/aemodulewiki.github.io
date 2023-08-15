module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("dateWrangler", function(date, language, format) {
    let renderedDate = new Date(date);
    const options = {
      month: format === "short" ? "short" : "long",
      day: "numeric",
      year: "numeric",
    };

    return new Intl.DateTimeFormat(language, options).format(renderedDate);
  });

  eleventyConfig.addFilter("getYear", function(date) {
    let renderedDate = new Date(date);
    return renderedDate.getFullYear();
  });
};
