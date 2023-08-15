// Sort the JSON data using the custom sorting function
// reorder following volumes, issues, pages
module.exports = function(eleventyConfig, options) {
  eleventyConfig.addFilter("reorderJournal", function(data) {
    return data.sort(customSort);
  });
};

function customSort(a, b) {
    // Sort by volume
    if (a.page && b.page) {
      if (!a.page) a.page = "0-0";
      if (!b.page) b.page = "0-0";

      // Sort by pages within the same issue
      const aPage = a.page.split("-").map(Number);
      const bPage = b.page.split("-").map(Number);
      //
      if (aPage[0] < bPage[0]) return -1;
      if (aPage[0] > bPage[0]) return 1;
    }
  return 0;
}
