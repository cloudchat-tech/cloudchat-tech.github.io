"use strict";

var postcss = require("postcss");
var postcssrc = require("postcss-load-config");

function renderer(data) {
  return postcssrc()
    .then(({ plugins, options }) =>
      postcss(plugins).process(data.text, options)
    )
    .then((result) => result.css);
}

hexo.extend.renderer.register("css", "css", renderer);

var pagination = require("hexo-pagination");
hexo.extend.generator.register("episodes", function (locals) {
  return pagination("episodes", locals.posts, {
    perPage: 5,
    format: "page/%d/",
    layout: ["episodes", "index"],
    data: {},
  });
});

// JSON generator for all episodes
hexo.extend.generator.register("episodes-json", function (locals) {
  const episodes = locals.posts.sort("-date").map((post) => {
    // Strip HTML tags to create plain text version
    const stripHtml = (html) => {
      return html
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/&nbsp;/g, ' ') // Replace &nbsp;
        .replace(/&amp;/g, '&') // Replace &amp;
        .replace(/&lt;/g, '<') // Replace &lt;
        .replace(/&gt;/g, '>') // Replace &gt;
        .replace(/&quot;/g, '"') // Replace &quot;
        .replace(/&#39;/g, "'") // Replace &#39;
        .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove excessive newlines
        .trim();
    };

    return {
      title: post.title,
      date: post.date,
      updated: post.updated,
      permalink: post.permalink,
      path: post.path,
      excerpt: post.excerpt,
      // Include raw markdown if available, otherwise fall back to content
      markdown: post.raw || post._content || null,
      // Plain text version (HTML stripped)
      text: stripHtml(post.content),
      // Keep HTML version for backwards compatibility
      content: post.content,
      categories: post.categories.map((cat) => cat.name),
      tags: post.tags.map((tag) => tag.name),
      // Add any custom front-matter fields you use
      ...(post.episode_number && { episode_number: post.episode_number }),
      ...(post.duration && { duration: post.duration }),
      ...(post.audio_url && { audio_url: post.audio_url }),
      ...(post.guests && { guests: post.guests }),
    };
  });

  return {
    path: "episodes.json",
    data: JSON.stringify({
      total: episodes.length,
      episodes: episodes,
    }, null, 2),
  };
});
