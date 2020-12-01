---
title: Archive
date: 2020-10-12 00:00:00 -5
---

# The Archives

<ul>
{% assign year = nil %}
{% for item in collections.post reversed %}
{% assign current_year = item.date | date: '%Y' | number %}
{% unless current_year == year %}
<li class="year"><h2>{{ current_year }}</h2></li>
{% assign year = current_year %}
{% endunless %}
<li class="post">
  <a href="{{ item.url | url }}">
    <h2>{{ item.data.title }}</h2>
    <time datetime>{{ item.date | postDate }}</time>
  </a>
</li>
{% endfor %}
</ul>
