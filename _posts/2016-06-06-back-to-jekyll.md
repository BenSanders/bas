---
layout: post
title: Back To Jekyll
date: June 6, 2016
desc: Reason why I decided to come back to Jekyll.
tags:
- blog
- update
excerpt_separator: <!--more-->
---
<img class="featured-image" src="/images/logo-2x.png">
<h2 class="post-h2">{{ page.title}}</h2>
<p class="post-sub-desc"><span>{{ page.desc }}</span></p>
<p class="post-date"><span>{{ page.date | date_to_string }}</span></p>
<!--more-->
{% include _share-page.html %}
<p class="single-post">
  I change my mind a lot!
</p>
<p class="single-post">
  There I said it but no in all seriousness though I decided, after much thought,
  to switch back over to Jekyll. The reason being that I felt that Wordpress,
  while a very good platform for bloggers/writers, wasn't for me anymore. I wanted
  to get back to my roots as a web developer and actually blog with code. I mean
  using command line, git, and the like to power my blog. Plus I like the security
  of not having to log into my site via a web based login. Now the only login I
  have is that of my server.
</p>

<a href="#img1">
  <img class="post-image" alt="Image of Windows Powershell window with jekyll running" src="/images/back-to-jekyll-image-1.png">
</a>
<span class="img-desc">(Image of Windows Powershell window with jekyll running)</span>

<a href="#"  class="lightbox" id="img1">
  <img alt="Image of Windows Powershell window with jekyll running" src="/images/back-to-jekyll-image-1.png">
</a>

<p class="single-post">
There is just something serene of about running commands through a Powershell
window and uploading everything to a repo. I can also choose how I want the site
to look without any of the Wordpress code getting the way it just takes me back
to a time of writing some code and uploading it to a server.
</p>
