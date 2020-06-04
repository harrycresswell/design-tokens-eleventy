module.exports = function() {
  
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: [
      "njk",
      "html",
      "css",
    ],
    passthroughFileCopy: true
  };

};