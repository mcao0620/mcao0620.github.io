---
title: The latest revision of this site
date: 2026-01-14
tags: posts
layout: base.njk
---

<div class="prose dark:prose-invert">

### {{ title }}

*{{ date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) }}*

I first built this site in August 2021. The initial setup was designed to be as simple, speedy, and lightweight as possible:

- It consisted of a single `index.html` file.
- It used Tailwind CSS for styling, vanilla JavaScript for dark mode, and a custom module to render project cards.
- It was compiled through [PostCSS](https://postcss.org/), which tree-shook and minified the CSS to ensure the smallest possible payload for the browser.

I've wanted to write more frequently, so I extended that foundation with [11ty](https://www.11ty.dev/)—a simple, fast static site generator that handles Markdown and templates HTML across pages. Now, each post has its own page without the need for manual layout duplication.

Since we're all accustomed to the fluid navigation of [SPAs](https://en.wikipedia.org/wiki/Single-page_application), I wanted to replicate that experience here. I added a small script that intercepts link clicks, fetches the new page, and swaps out only the `<main>` content. This prevents the CSS from reloading and eliminates page flickers while navigating through internal pages.

### What's next

I'll be using this space to share what I'm learning and building!

</div>
