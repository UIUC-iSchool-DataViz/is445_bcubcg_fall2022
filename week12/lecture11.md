---
title: Lecture 11 - Starboard, Publishing & more in Idyll
layout: lecture
description: >-
 Publishing your viz, vega-lite in Idyll and a bit of d3.js
date: 2021-11-01
---

## This Week/Last Week

<img src='../week11/images/this_week3.png'>

notes:

today we'll be continuing on with some of what we did last week -- moving into more Markdown-based viz and viz "reports" along with more javascript and
finally getting into idyll probably at the end of class

---

## Dropping lowest Weekly Viz score

---

## Notes about our final class, May 2nd

notes:
I will be traveling!  We'll see if we can't do this online OR we will have a recording + extended office hours that day

---


<br/>
<br/>
<br/>

# Back to Starboard!!

notes:
we'll finish up some stuff in starboard, namly adding interactivity, before moving onto Idyll

**go to starboard to finish up!!**

---

## Today

 * Publishing
   * Idyll
   * Github Pages
   * vega-lite in Idyll
   * D3.js (if we have time)
   
notes:
**back from starboard**

---

<br />
<br />
<br />

# TOPIC 1: Programming with Idyll

---

## Idyll

A web-based toolkit for storytelling with data visualizations!

 * Reduce manual coding for interactive articles
 * Integration with vega-lite
 * Integration with D3.js

---

## Markdown

Idyll uses Markdown for text, just like Starboard:

 * To **bold**, use `**two asterisks**`
 * You can _italicize_ with `_underscores_`
 * Try out making bullet lists with `*` on each line
 * Links are fun: `[link text](http://example.com/)`

---

## Idyll

 * The editor: https://idyll-lang.org/editor
 * Examples: https://idyll-lang.org/gallery
   * a favorite: https://mathisonian.github.io/diy-data-fugazi/
   * source code: https://github.com/mathisonian/diy-data-fugazi

---

## Idyll

Pros:
 * Visualization-ready, compatible with Vega-Lite, D3.js, and Flourish
 * Modern features and design

Cons:
 * Less common syntax (Markdown)
 * Not well-documented
 * open source means less guarantee of long-term support in the future

<img src="images/idyll.png" width="200"/>



---

## [D3.js](https://github.com/d3/d3/wiki/Gallery)

A JavaScript library for web-based data visualization

 * Declarative, not imperative (this is better for web coding)
 * Dynamic and interactive
 * Smooth transitions
 
notes:
we may/may not get to d3.js for this semester, but check out some other examples from previous sections

---

## D3.js

<img src="images/words.png" width="700"/>

notes:
D3 is meant to be well-integrated into the existing infrastructure of the internet. The worldwide web is a real patchwork of different languages with different syntaxes meant to do different things. Don't let it overwhelm you. They tend to be pretty simple to start, and only get more complicated when you need them to.

---

## D3.js

<img src="images/html.png" width="700"/>

notes:
We talked about this before, but just as a reminder:

HTML or Hypertext Markup Language is the default syntax for websites. It's meant to be structured with tags like "head", "body", "paragraph", and "division". 

It's essentially a skeleton for other functionality to hang off of.

You may see the term DOM or Document Object Model. This is just another name for this skeleton/framework.

---

## D3.js

<img src="images/css.png" width="700"/>

notes:
CSS or cascading style sheets are how you define how websites are formatted. They do color, indentation, drop shadows, etc. Each CSS call is attached to an HTML tag.

CSS can be called in-line, or from an external file dedicated exclusively to CSS code.

---

## D3.js

<img src="images/svg.png" width="700"/>

notes:
SVG or Scalable Vector Graphics is an XML-based implementation of vector shape drawing that's natively understood by website compilers. It's an easy way to include dynamically rendered, animated, or interactive imagery in a webpage.

---

## D3.js

<img src="images/javascript.png" width="700"/>

notes:
JavaScript is a dynamic programming language that runs natively on webpages that we've been using the past few weeks in Starboard. If you want to run programming logic in a webpage, you use javascript. If you see interactivity or animated effects on a website, you can generally expect they were written in javascript. 

---

## Idyll

Most of this is hidden from you when writing in Idyll! But it helps to understand the underlying mechanisms.

We'll start with vega-lite in Idyll.

If we have time, we'll get into D3.js and Idyll (examples are posted).

You can use any of these tools in the final project!


notes:
what are the limits to data size in Idyll and the web browser?

---

## Onto Idyll!

Idyll is a reactive markup language for visualization and narrative documents.

[idyll-lang.org](idyll-lang.org)

