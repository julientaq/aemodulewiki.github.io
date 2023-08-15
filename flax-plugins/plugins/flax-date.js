module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("renderDate", function(date, language, format) {
    if (!date) date = new Date();
    let renderedDate = new Date(date);
    const options = {
      month: format === "short" ? "short" : "long",
      day: "numeric",
      year: "numeric",
    };

    return new Intl.DateTimeFormat(language, options).format(renderedDate);
  });

  // getYear() = return the current year 
  eleventyConfig.addShortcode("getYear", function(date) {
    if (!date) return new Date().getFullYear();
    return new Date(date).getFullYear();
  });
};
