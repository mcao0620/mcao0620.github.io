module.exports = function(eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/index.js": "index.js" });
  
  // Watch for CSS changes during dev
  eleventyConfig.setServerOptions({
    watch: ["docs/styles.css"]
  });

  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes"
    }
  };
};
