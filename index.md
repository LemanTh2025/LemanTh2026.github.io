---
layout: single
title: "LemanTh — Lausanne Event on Machine Learning and Neural Network Theory"
classes: wide
header:
  overlay_image: /assets/img/hero.jpg
  overlay_filter: 0.3
  caption: "Lausanne, Switzerland"
  actions:
    - label: "Register now"
      url: "{{ site.event.registration_url }}"
      btn_class: "btn--primary"
---

<div class="lead">
The **{{ site.event.short }}** is a focused meeting on the theoretical foundations of machine learning and neural networks, spanning probability, statistical physics, optimization, and theoretical computer science.
</div>

<div class="event-meta">
  <div class="meta-item"><strong>Dates:</strong> {{ site.event.dates }}</div>
  <div class="meta-item"><strong>Location:</strong> {{ site.event.location }}</div>
</div>

<div id="countdown" class="countdown">
  <div><span id="cd-days">–</span><small>days</small></div>
  <div><span id="cd-hours">–</span><small>hours</small></div>
  <div><span id="cd-mins">–</span><small>mins</small></div>
  <div><span id="cd-secs">–</span><small>secs</small></div>
</div>

<p class="cta">
<a class="btn btn--primary btn--large" href="{{ site.event.registration_url }}">Register (free, required)</a>
</p>

## About

Over the past decade, machine learning has seen a revolution: algorithms can now tackle tasks and volumes of data previously considered science fiction. {{ site.event.short }} focuses on **theory**—from high-dimensional statistics and statistical physics to optimization and TCS—with an emphasis on discussion and open problems.

## Invited Speakers

{% include speaker-grid.html %}

<p class="cta">
<a class="btn" href="{{ '/pages/speakers/' | relative_url }}">See speaker bios</a>
</p>

## Schedule (preview)

{% include schedule-table.html %}

<p class="cta">
<a class="btn" href="{{ '/pages/schedule/' | relative_url }}">Full schedule</a>
</p>

## Practical information

- **Venue:** {{ site.event.location }}  
- **Dates:** {{ site.event.dates }}  
- **Registration:** Free but mandatory (limited seats).  
- **Contact:** <a href="mailto:{{ site.event.contact_email }}">{{ site.event.contact_email }}</a>

## Thanks to our sponsors
<div class="sponsor-row">
  <img src="/assets/img/sponsor1.png" alt="Sponsor 1" />
  <img src="/assets/img/sponsor2.png" alt="Sponsor 2" />
</div>

<script src="{{ '/assets/js/countdown.js' | relative_url }}"></script>