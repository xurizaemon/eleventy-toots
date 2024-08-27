# Eleventy 🤝 Toots

Feed importer integration.

## Status

Initial WIP. Contribution is welcome!

Support T&C: [no commitment, only commits](https://unmaintained.tech/)

- https://www.11ty.dev/docs/pages-from-data/
- https://www.11ty.dev/docs/collections/

## Installation

Install using your site's package manager, eg `npm install @xurizaemon/eleventy-toots`

## Configuration

Add to your Eleventy site's `module.exports = (eleventyConfig) => {`:

```js
eleventyConfig.addPlugin(EleventyToots, {
  url: 'https://example.com/@example.rss,
});
```

You'll also need to add to your site a template which makes use of the data this plugin provides.

The example template `examples/toots.md` provides a page with a bullet list of the text of your most recent Mastodon posts.

The templates `toots.md.njk` and `toots.json.njk` are more complicated examples, which I'm using to convert an RSS feed into a directory of data over time.

| example                   | demonstrates                                  |
|---------------------------|-----------------------------------------------|
| `examples/toots.md`       | Build a page with a list of recent items.     |
| `examples/toots.md.njk`   | Build a directory of Markdown from RSS items. |
| `examples/toots.json.njk` | Build a directory of JSON from RSS items.     |

## Testing

Tests are executed in Github Actions, and can be run locally with:

```
npm run test
```

## License

This software is [AGPL-3.0](LICENSE).
