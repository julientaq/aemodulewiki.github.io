module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("showAllData", function(data) {
    return getAllProperties(data);
  });
};

function getAllProperties(obj) {
  const allProperties = {};

  // Get own properties and symbols
  const ownProperties = Object.getOwnPropertyNames(obj);
  const symbols = Object.getOwnPropertySymbols(obj);

  // Combine property names and symbols
  const allKeys = ownProperties.concat(symbols);

  // Iterate over all keys and store their values
  allKeys.forEach((key) => {
    allProperties[key.toString()] = obj[key];
  });

  return allProperties;
}
