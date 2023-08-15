const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const postcssImport = require("postcss-import");
const postcssNested = require("postcss-nested");

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./static/css/");
  eleventyConfig.on("eleventy.before", async () => {
    // Define the base directory for themes
    // const themesBasePath = path.join(__dirname, "../static/css/themes/");
    const themesBasePath = "./static/css/themes/";

    // Get a list of theme directories
    const themeDirectories = fs
      .readdirSync(themesBasePath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    // Process each theme directory
    themeDirectories.forEach((themeDir) => {
      const themePath = path.join(themesBasePath, themeDir);
      const directoryPath = `./public/css/${themeDir}`;

      // Create the directory if it doesn't exist
      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
      }

      // Process main.css for each theme
      const cssFilePath = path.join(themePath, "main.css");
      fs.readFile(cssFilePath, async (err, css) => {
        if (err) {
          console.error(`Error reading ${cssFilePath}: ${err}`);
          return;
        }

        await postcss([postcssImport, postcssNested])
          .process(css, {
            from: cssFilePath,
            to: path.join(directoryPath, "main.css"),
          })
          .then((result) => {
            fs.writeFileSync(path.join(directoryPath, "main.css"), result.css);
            if (result.map) {
              fs.writeFileSync(
                path.join(directoryPath, "main.css.map"),
                result.map.toString()
              );
            }
          });
      });
    });
  });
};

//
