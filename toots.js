/**
 * Fetches Mastodon RSS feed into a collection.
 *
 * WIP. See https://github.com/xurizaemon/eleventy-toots for updates.
 */

const EleventyFetch = require("@11ty/eleventy-fetch");
const Parser = require('rss-parser');

async function fetchRSS(rssURL) {
  return await EleventyFetch(rssURL, {
    duration: "1d", // Cache the result for one day
    type: "text"    // Parse as text
  });
}

async function parseRSS(rssData) {
  let parser = new Parser();
  let feed = await parser.parseString(rssData);
  return feed.items;
}

module.exports = function(eleventyConfig, options) {
  eleventyConfig.addGlobalData("toots", async () => {
    const rssData = await fetchRSS(options.url);
    return await parseRSS(rssData);
  });

  eleventyConfig.addFilter('toot_json', (obj) => {
    return JSON.stringify(obj, null, 2);
  });
};

module.exports.fetchRSS = fetchRSS;
module.exports.parseRSS = parseRSS;
