---
title: The latest revision of this site
date: 2026-01-14
tags: posts
layout: base.njk
---

<div class="prose dark:prose-invert">

*January 2026*

I first built this site back in August 2021. The setup was dead simple—just a single `index.html` file styled with Tailwind CSS, alongside some vanilla JavaScript for dark mode and a module that rendered project cards into the page. Everything was compiled through [PostCSS](https://postcss.org/), so the final CSS sent to browsers was tree-shaken and minified.

I've wanted to write more on this site, so I extended that foundation with [11ty](https://www.11ty.dev/), a simple, fast static site generator that handles Markdown and templates the existing HTML across pages. Each post now gets its own page without me having to duplicate the layout in every HTML file.

We're all so used to the smoothness of navigating around [SPAs](https://en.wikipedia.org/wiki/Single-page_application) that I wanted to bring that same feeling here. I added a small script that intercepts link clicks, fetches the new page, and swaps out just the `<main>` content so that the CSS doesn't reload and cause page flickers when navigating between internal pages.

### What's next

I'm going to use this space to share what I'm learning and building!

</div>
