---
# Generate an HTML page which has a list of recent toots.
title: Toots
layout: default.njk
---

{%- for toot in toots | reverse %}
- {{ toot.content }}
{%- endfor %}
