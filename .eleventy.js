module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode("planet", function(name, description) {
      return `<div class="planet-card">
                  <h2>${name}</h2>
                  <p>${description}</p>
              </div>`;
  });

  return {
      dir: {
          input: ".",
          includes: "_includes"
      }
  };
};
