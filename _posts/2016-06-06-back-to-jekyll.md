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
<header class="article-header">
  <img class="featured-image" src="/images/logo-2x.png" alt="Jekyll Logo">
  <h1 class="title">{{ page.title }}</h1>
  <h3 class="subtitle">{{ page.desc }}</h3>
  <h3 class="subtitle"><span>{{ page.date | date_to_string }}</span></h3>
</header>
<!--more-->
{% include _share-page.html %}
<section>
  <p>
  I change my mind a lot!
  </p>
  <p>
  There I said it but no in all seriousness though I decided, after much thought,
  to switch back over to Jekyll. The reason being that I felt that Wordpress,
  while a very good platform for bloggers/writers, wasn't for me anymore. I wanted
  to get back to my roots as a web developer and actually blog with code. I mean
  using command line, git, and the like to power my blog. Plus I like the security
  of not having to log into my site via a web based login. Now the only login I
  have is that of my server.
  </p>
</section>
<section class="photoset">
  <a href="#img1">
  <img class="post-image" alt="Image of Windows Powershell window with jekyll running" src="/images/back-to-jekyll-image-1.png">
  </a>
  <footer class="img-desc">(Image of Windows Powershell window with jekyll running)</footer>
  <a href="#"  class="lightbox" id="img1">
    <img alt="Image of Windows Powershell window with jekyll running" src="/images/back-to-jekyll-image-1.png">
  </a>
</section>
<section>
  <p>
    There is just something serene of about running commands through a Powershell
    window and uploading everything to a repo. I can also choose how I want the site
    to look without any of the Wordpress code getting the way it just takes me back
    to a time of writing some code and uploading it to a server.
  </p>
</section>
<footer class="article-footer">Tags: {{ page.tags }}</footer>