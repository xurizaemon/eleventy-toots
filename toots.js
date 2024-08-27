/**
 * Fetches Mastodon RSS feed into a collection.
 *
 * WIP. See https://github.com/xurizaemon/eleventy-toots for updates.
 */

const EleventyFetch = require("@11ty/eleventy-fetch");
const Parser = require('rss-parser');

async function fetchRSS(rssURL) {
  let rssData = await EleventyFetch(rssURL, {
    duration: "1d", // Cache the result for one day
    type: "text"    // Parse as text
  });

  let parser = new Parser();
  let feed = await parser.parseString(rssData);

  return feed.items;
}

module.exports = function(eleventyConfig, options) {
  eleventyConfig.addGlobalData("toots", async () => {
    return await fetchRSS(options.url);
  });
};
