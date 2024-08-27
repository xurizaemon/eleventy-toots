const test = require("ava");
const { parseRSS } = require("../toots.js");
const fs = require('fs').promises;
const path = require('path');

test("Test parseRSS method", async t => {
  const fixturePath = path.join(__dirname, 'fixtures', 'sample_feed.xml');
  const sampleFeed = await fs.readFile(fixturePath, 'utf-8');

  const fetchedItems = await parseRSS(sampleFeed);

  t.truthy(fetchedItems, "Items should be fetched");
  t.is(fetchedItems.length, 12, "Should have 12 items");
  t.regex(fetchedItems[0].content, /finally taking the dog for a walk/, "First item should have expected content");
  t.regex(fetchedItems[1].content, /go press &quot;play&quot; on the line charts/, "First item should have expected content");
  t.is(fetchedItems[0].link, "https://example.org/@exampleuser/113031903914816708", "First item should have correct link");
  t.is(fetchedItems[1].link, "https://example.org/@exampleuser/113027825347296904", "Second item should have correct link");
});
