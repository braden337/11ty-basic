---
title: Home
date: 2020-10-11 00:00:00 -5
permalink: /
eleventyExcludeFromCollections: true
---

## Latest Posts

<ul>
{% assign latest = collections.post | reverse %}
{% for post in latest limit: 5 %}
<li>
  <a href="{{ post.url | url }}">
    {{ post.data.title }}
  </a>
  <time datetime>
    {{ post.date | postDate }}
  </time>
</li>
{% endfor %}
</ul>
