// basic configuration for flax

const yaml = require("js-yaml");

const PORT = 8100; // use a port you are reasonably sure is not in use elsewhere

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

  if (process.env.ELEVENTY_RUN_MODE != "serve") {
    eleventyConfig.on("eleventy.after", async () => {
      // Run me after the build ends
      require("out-url").open(`http://localhost:${PORT}`);
    });

    // eleventyConfig.setServerOptions({
    //   port: PORT,
    // });
  }

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
