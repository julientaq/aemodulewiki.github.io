
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const slugify = require("slugify");

module.exports = function(eleventyConfig, options) {
  eleventyConfig.addFilter('addID', function(data, page, count = true) {
    let doc = new JSDOM(data)

    doc.window.document.querySelectorAll('h2, h3, h4, h5, h6').forEach((el,index) => {
      if(el.id) return
      el.id = `${slugify(el.textContent, { remove: /[*+~.()'"!:@,]/g })}_${index}`
    })
    return doc.window.document.body.innerHTML
  })
}
