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

## Testing

## Example templates

| example                   | demonstrates                                  |
|---------------------------|-----------------------------------------------|
| `examples/toots.md.njk`   | Build a directory of Markdown from RSS items. |
| `examples/toots.json.njk` | Build a directory of JSON from RSS items.     |

## License

This software is [AGPL-3.0](LICENSE).
