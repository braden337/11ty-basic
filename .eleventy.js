const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const moment = require('moment');
const _ = require('lodash');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy('src/images');

  eleventyConfig.setBrowserSyncConfig({
    files: ['dist/main.js', 'dist/style.css'],
    open: true,
  });

  eleventyConfig.addFilter('yearSlashMonth', function (date) {
    let m = moment(date);
    return m.format('YYYY/MM').toLowerCase();
  });

  eleventyConfig.addFilter('fromNow', function (date) {
    let m = moment(date);
    return m.fromNow();
  });

  eleventyConfig.addFilter('postDate', function (date) {
    let m = moment(date);
    return m.format('MMMM Do, YYYY');
  });

  return {
    markdownTemplateEngine: 'liquid',
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_layouts',
    },
  };
};
