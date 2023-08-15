module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter("transformVolume", function(data) {
    const volumes = {};

    data.forEach(item => {
      const { volume, issue, ...content } = item;

      if (!volumes[volume]) {
        volumes[volume] = [];
      }

      volumes[volume].push({
        volume,
        issue,
        content
      });
    });

    return volumes;
  });
  eleventyConfig.addFilter("groupBy", function(data, keys) {
    return data.reduce(function(result, item) {
      let currentItem = result;
      for (const key of keys) {
        const group = item[key];
        if (!currentItem[group]) {
          currentItem[group] = {};
        }
        currentItem = currentItem[group];
      }
      if (!currentItem.items) {
        currentItem.items = [];
      }
      currentItem.items.push(item);
      return result;
    }, {});
  });

};
