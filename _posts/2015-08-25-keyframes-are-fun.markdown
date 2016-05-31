---
layout: post
title: Keyframes Are Fun
date: August 25, 2015
tags:
- blog
- creative writing
- writing
excerpt_separator: <!--more-->
permalink: keyframes-are-fun
---
<h2 class="post-h2">{{ page.title}}</h2>
<p class="post-sub-desc"><span>Doing some development testing</span></p>
<p class="post-date"><span>{{ page.date | date_to_string }}</span></p>
<!--more-->
<p class="single-post">
Keyframes in HTML5 is fun. Well, I mean, coding is fun in general especially once you can get into "the zone" but the idea of making your website come alive is fun.
</p>
<p class="single-post">
{% highlight css %}
/* Key Frames */

@keyframes fadein {
from { opacity: 0; }
to { opacity: 1; }
}
{% endhighlight %}
</p>
<p class="single-post">
I mean all I have to do is insert something like the above into my style.css document and it will make the class or id fade in on-load.
Anyway that is just a quick update to what I've been doing with this site lately - I'll keep you all posted as I design the site some more.
</p>
