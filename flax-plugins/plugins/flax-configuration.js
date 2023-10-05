// basic configuration for flax

const yaml = require("js-yaml");


module.exports = function(eleventyConfig) {
  // accept data as yaml
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));

  console.log(process.env.ELEVENTY_RUN_MODE);
  // quiet
  eleventyConfig.setQuietMode(true);

  //server
  // only copy file on build. otherwise fake the copy
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

  eleventyConfig.setServerOptions({
    domDiff: false,
    // to auto reload when css change
    watch: ["public/**/*.css", "static/**/*.css"],
  });

  // passthrough file copy //
  eleventyConfig.addPassthroughCopy(
    { "static/tocopy": "/" },
    {
      expand: true,
    }
  );
  eleventyConfig.addPassthroughCopy(
    { "static/images": "/images" },
    {
      expand: true,
    }
  );
  eleventyConfig.addPassthroughCopy(
    { "static/fonts": "/fonts" },
    {
      expand: true,
    }
  );
};
