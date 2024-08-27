const test = require("ava");
const { fetchRSS } = require("../toots.js");
const fs = require('fs').promises;
const path = require('path');

test("Test fetchRSS method", async t => {
  const fixturePath = path.join(__dirname, 'fixtures', 'sample_feed.xml');
  const sampleFeed = await fs.readFile(fixturePath, 'utf-8');

  const fetchedItems = await fetchRSS('https://example.com/feed.xml');

  t.truthy(fetchedItems, "Items should be fetched");
  t.is(fetchedItems.length, 2, "Should have 2 items");
  t.is(fetchedItems[0].title, "Sample Toot 1", "First item should have correct title");
  t.is(fetchedItems[1].title, "Sample Toot 2", "Second item should have correct title");
  t.is(fetchedItems[0].link, "https://example.com/toot1", "First item should have correct link");
  t.is(fetchedItems[1].link, "https://example.com/toot2", "Second item should have correct link");
  t.is(fetchedItems[0].content, "This is the content of sample toot 1", "First item should have correct content");
  t.is(fetchedItems[1].content, "This is the content of sample toot 2", "Second item should have correct content");
});
