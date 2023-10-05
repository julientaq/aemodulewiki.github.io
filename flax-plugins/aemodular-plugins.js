module.exports = function(eleventyConfig, options) {


  eleventyConfig.addShortcode("modules", function(data, img) {
    // get from the modules collection
    return `<a href="/modules-alt/#${data}"></a>`
  })
};
