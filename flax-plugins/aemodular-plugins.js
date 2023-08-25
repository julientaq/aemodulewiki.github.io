module.exports = function(eleventyConfig, options) {


  eleventyConfig.addShortcode("modules", function(data, img) {
    // get from the modules collection
    console.logl(collection)
    return `<a href="/modules/${data}"></a>`
  })
};
