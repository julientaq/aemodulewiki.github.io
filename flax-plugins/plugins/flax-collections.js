
//
// this file manage the possible collections for eleventy
// this include the menu system
// the dynamically created book collections

const fs = require("fs");
const path = require("path");

module.exports = function(eleventyConfig) {
  //eleventy sortBy, ascender / descender
  eleventyConfig.addFilter("orderBy", function(collection, meta, order) {
    switch (order) {
      case "asc":
        return collection.sort((a, b) => {
          return a.data[meta] - b.data[meta];
        });
        break;
      case "desc":
        return collection.sort((a, b) => {
          return b.data[meta] - a.data[meta];
        });
        break;
      default:
        return collection.sort((a, b) => {
          return a.data[meta] - b.data[meta];
        });
    }
  });

  // create a collection for all the page that have menu in there frontmatter
  // you can then get it with menu

  eleventyConfig.addCollection("menuitems", function(collectionApi) {
    // create a collection for everything that need to be in the menu, using the menutitle metadata

    let collection = collectionApi

      .getFilteredByGlob("./src/content/**/*.md")
      .filter(function(item) {
        if (item.data.menutitle) {
          return item;
        }
      })
      .sort(function(a, b) {
        return a.data.order - b.data.order;
      });
    return collection;
  });

  // create a collection for all the page that have menufooter in there frontmatter
  eleventyConfig.addCollection("menufooteritems", function(collectionApi) {
    let collection = collectionApi
      .getFilteredByGlob("./src/content/**/*.md", "./src/content/**/*.html")
      .filter(function(item) {
        if (item.data.menufooter) {
          return item;
        }
      })
      .sort(function(a, b) {
        return b.order - a.order;
      });
    return collection;
  });

  //create a ccollection dynamically from the books folders
  //

  try {
    const subfolderNames = fs
      .readdirSync("./src/content/books/", { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    subfolderNames.forEach((subfolderName) => {
      eleventyConfig.addCollection(subfolderName, function(collectionApi) {
        return collectionApi
          .getAll()
          .sort(function(a, b) {
            return a.data.chapternumber - b.data.chapternumber;
          })
          .filter((item) => {
            return item.inputPath.includes(`/${subfolderName}/`);
          });
      });
    });
  } catch {
    console.log("this flax setup has no books");
  }

  //create a ccollection dynamically from the books folders
  //
  try {
    const journalSubFolder = fs
      .readdirSync("./src/content/journals/", { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    journalSubFolder.forEach((subfolderName) => {
      eleventyConfig.addCollection(subfolderName, function(collectionApi) {
        return collectionApi
          .getAll()
          .sort(function(a, b) {
            return a.data.chapternumber - b.data.chapternumber;
          })
          .filter((item) => {
            return item.inputPath.includes(`/${subfolderName}/`);
          });
      });
    });
  } catch (error) {
    console.log("this flax setup has no journal");
  }

  //create a ccollection dynamically from the books folders
  //
  try {
    const catalogsFolder = fs
      .readdirSync("./src/content/catalogs/", { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    catalogsFolder.forEach((subfolderName) => {
      eleventyConfig.addCollection(subfolderName, function(collectionApi) {
        return collectionApi
          .getAll()
          .filter((item) => {
            if (item.inputPath.includes(`/${subfolderName}/`)) {
              return item;
            }
            // return item.inputPath.includes(`/${subfolderName}/`);
          })
          .sort(function(a, b) {
            return a.data.itemnumber - b.data.itemnumber;
          });
      });
    });
  } catch (error) {
    console.log("this flax setup has no catalog");
  }
};
