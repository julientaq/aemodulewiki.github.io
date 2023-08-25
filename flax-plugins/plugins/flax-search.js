// based on https://rknight.me/using-pagefind-with-eleventy-for-search/
//
const { execSync } = require("child_process");

module.exports = function(eleventyConfig) {
  eleventyConfig.on("eleventy.after", () => {
    execSync(`npx pagefind --source public --glob \"**/*.html\"`, {
      encoding: "utf-8",
    });
  });
};
