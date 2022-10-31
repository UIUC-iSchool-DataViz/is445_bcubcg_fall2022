---
title: Lecture 11 - Publishing & Validation
layout: lecture
description: >-
 More about publishing and validation, and Jekyll+vega-lite+Altair
date: 2022-11-01
---

## Be aware: prep "projects" will be stored in `_example_projects/` folder!

---

## Push Homework \#10 date back a bit?

note:
this won't change the due date of the Final Project Part 1, so this would be like a Tues/Wed due date

NO extensions for Final Project, Part 1

---

## Last Week/This Week

<img src="../week10/images/week10.png">

notes:
so far, we've been covering a bit of javascript and vega-lite and started thinking about it in Jekyll webpages

this week we'll discuss more general methods of publishing, and we'll talk about how to validate how "well" our visualizations are doing.

While we'll just touch on vega-lite in Jekyll for plotting and then start looking at Altair either this week or next week

---

## Today

 1. Validation 
 1. Publishing
 
notes: today we'll talk about how to validate how good our viz is and then also talk about other ways of publishing

---

<br>
<br>
<br>

# TOPIC 1: Validation

---

## Validation

How do you know your visualization is actually useful? Is it...

 * More comprehensive or contextual
 * More revealing or educational
 * More fun or pleasant to use
 * More efficient or fast

notes:
What do we even mean "more than"? More than what?

More than just looking at numbers?

More than a previous visualization?

More than the state of the art?

---

## Validation

Why is validating a visualization important?

 1. The design space is huge
 1. Most designs are ineffective
 1. User-focused design is often an afterthought
 1. The "quality" of a visualization is subjective

notes:
Can you all think of a user experience that drives you nuts in your daily life? A pointless button in your email? A door that opens the wrong way? A noisy piece of machinery?

---

## Validation

What can a visualization designer get wrong?

 * Misunderstand the needs of the domain expert or educator
 * Interpret the data incorrectly
 * Represent the data in a visually confusing way
 * The software is too laggy or difficult to use in a practical setting

notes:
Any other ideas?

---

## Methods of Validation

Before developing your visualization system:

 1. Observe and interview target users or audience members
 1. Justify interaction design plans against the academic literature and existing tools
 1. Do an analysis of the complexity of the system

---

## Methods of Validation

After developing your visualization prototype:

 1. Measure system performance
 1. Usability studies (formal and/or informal)
 1. Measure human time to complete a task, or number of user errors
 1. Do a field study - perhaps even collect user data with the system

notes:
You don't have to do all of these all the time, but depending on the project they might all be a good idea

Also, remember to respect user privacy when collecting user data. This is extremely sensitive.

---

## Methods of Validation:

After publishing your visualization:

 1. Observe adoption rates
 1. Solicit anecdotal user feedback

notes:
This is especially valuable if you expect to have to make more than one visualization in your life. Building intuition for what works and what doesn't is a large part of the career success of a visualization designer.

The Advanced Visualization Lab interacts with audiences through lab demos and conference talks regularly to collect this kind of feedback.

**we'll be getting a talk from the head of the AVL in week 15**

---

## Example informal Validation: AVL

<img src="images/inf_val.jpg" width="800"/>

notes: here is an example of an informal validataion that the AVL does a lot of.  

Here the data visualizers are doing a showing of their movie and asking audiences for feedback - both on what they liked and didn't like, but also on what they learned.

---

## Validation in Final Project

Your peers will ask you questions in the Open Discussion Forum. 

Try to understand what is working for them and what is not. It will help hone your instincts.

---

<br>
<br>
<br>

# TOPIC 2: Publishing

---

## Publishing

Your stunning visualizations will do no one any good if they reside only on your laptop. How do you get them out there?

 * The Internet
 * In-Person Presentation
 * Popular Media
 * Physical Objects

---

## Publishing for the Web

 * Raw HTML, CSS, SVG, and JavaScript
 * Content Management Systems
 * Jekyll/others
 * GitHub Pages
 * Social Media
 
notes: we'll be mostly playing with Jekyll and github pages, but we'll also make a bit of content that you can share on social media (your webpages certainly can be shared)

---

## Raw HTML, CSS, SVG, and JavaScript

Pros:
 * Less of a learning curve for individual parts (though, more to put them into a final webpage)
 * Lots of documentation

Cons:
 * No reproducibility
 * LOTS of code writing
 * Locked in time - no software updates

---

## Content Management Systems

There are dozens of these, for instance: 
 * Squarespace
 * Wordpress
 * Wix
 * Drupal

<img src="images/cms.png" width="800"/>

notes:
Squarespace seems to be the favorite of small businesses. Drupal is great for large businesses.

---

## Content Management Systems

Pros:
 * Pre-built templates that might be updated by the development community
 * Plugins with visualization tools
 * Content updates are done by GUI

Cons: 
 * Visualization tools not automatically built in
 * More effort because they're meant for whole websites
 * Code (especially for plugins) can become outdated and incompatible

---

## Jekyll

Pros:
 * Popular -- well documented
 * Uses Markdown in (most) templates, minimizes coding

Cons:
 * Less common syntax (Markdown)
 * open source means less guarantee of long-term support in the future (though, popularity helps with that)
 * Doesn't support interactive visualization "out of the box"

---

## GitHub Pages

Pros: 
 * Community driven (there's lots of support)
 * Free hosting

Cons:
 * Community driven (there can be bugs and surprises)
 * You only get the one webpage (kind of)

<img src="images/githubpages.jpeg" width="200"/>

---

## Social Media

How can visualization be distributed on social media?
 * Images can be shared everywhere
 * Embedded videos using YouTube, Vimeo, FB video, etc
 * [SketchFab](https://sketchfab.com) scenes can be shared on Reddit, Facebook, and Twitter
 * Your webpages can be linked of course!

notes:
The internet is visual, and increasingly about video (or at least animated gif)

Sketchfab is a great service for viewing 3D content in a web browser.

---

## Social Media

Pros:
 * Huge audience
 * Easy to target the communities you're trying to communicate with

Cons:
 * Limited functionality, especially with respect to interactivity
 * Visualizations have shorter expiration date
 * No quality control

---

## Sharing Visualizations in Live Presentation

 * Jupyter Notebook (cleaned up)
 * PDF (3D capability!)
 * Powerpoint (3D capability!)
 * Mobile App
 * Printed on paper (300dpi, serif fonts, line thickness)
 * Custom in-house software (e.g. Bloomberg Terminal)

<img src="images/bloomberg.jpg" width="300"/>

notes:
Some of these are a bit outdated, but sometimes corporate environments require you to speak the language management wants you to speak.

---

## Sharing Visualizations through Popular Media

 * Videos and films

<img src="images/prison.gif" width="800"/>

notes:
This approach usually relies on more stylized treatments called "motion graphics".

Often the film approach depends on working with someone who produces movies who is looking for content. But some people will produce their own content (especially in short documentary format) for internet release.

---

## Sharing Visualizations through Popular Media

 * Museum exhibits

<img src="images/museum.png" width="800"/>

notes:
You get much more control when working with experts in museums, and you get to see your visualization blown up to huge sizes.

You still need to make a visualization that even a very small child will understand though.

---

## Sharing Visualizations through Popular Media

 * App Stores

<img src="images/wwt.png" width="800"/>

Image from <a href="http://worldwidetelescope.org/webclient/">World Wide Telescope</a>

notes:
This is how you can reach people through their phones and popular new media like virtual reality.

---

## Making Visualization

 * 3D printing (check out [Thingiverse](https://www.thingiverse.com/) or a [NASA 3D print](https://nasa3d.arc.nasa.gov/detail/cassiopeiaA))
 * Printed leggings (check out [Bags of Love](https://www.bagsoflove.com/))
 * Blankets
 * Whatever you can think of 
    * Visit [Instructables.com](https://instructables.com) for ideas!

<img src="images/blanketAndLeggings.png" width="800"/>

notes: here the blanket is the daily temperature recorded every day for a year 

the leggings are a scientific viz - the leg on the left is density and the right is temperature, taken from a simulation of stars forming in a gaseous region

with 3D printing, you can make "surfaces" in your dataset (more on that when we chat about scientific viz) and then 3D print these things

---

## Publishing for this class

See Homework #7 for different options.

notes:
go to HW 7 as a reminder

---

## Final Project, Part 1

notes:
go to page!!

---

## A few notes about Altair

[Altair](https://altair-viz.github.io/index.html) is a Python library that uses vega-lite syntax to make interactive plots that can also be [output as vega-lite json gists](https://altair-viz.github.io/user_guide/saving_charts.html).

<img src="images/altairp1.png" height="600">

---

## A few notes about Altair

There are some ways to [import vega-lite specifications into Altair](https://altair-viz.github.io/user_guide/internals.html#converting-vega-lite-to-altair).

We'll start off with this method, and then run up into some limitations when we attempt to build interactive dashboards.

<img src="images/vega_to_altair.png" height="550">


---

## Coding

Onto some vega-lite in Jekyll!
