module.exports = function(eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/index.js": "index.js" });
  
  // Pass through compiled CSS
  eleventyConfig.addPassthroughCopy({ "dist/styles.css": "styles.css" });

  // Watch for CSS changes during dev
  eleventyConfig.addWatchTarget("dist/");
  
  eleventyConfig.setServerOptions({
    watch: ["dist/**/*.css"]
  });

  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes"
    }
  };
};
