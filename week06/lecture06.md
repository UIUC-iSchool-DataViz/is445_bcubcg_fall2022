---
title: Lecture 6 - Dashboards & Maps
layout: lecture
description: >-
 Linking data a bit about maps (if we have time)
date: 2022-09-27
---

## Announcement: 

Short *anonymous* feedback survey.

notes:
*unhide the survey!*

---

## Where we are: Last week

<img src="images/dataviz_map_lastweek_take2.png">

notes: last week in the recording we started playing with dashboarding using some randomly generated data in bqplot

we also started working with the Grammer of Graphics and used bqplot declaritively to start "painting" scales and axis on our canvas

we also talked about different viz engines and you got to look at this in the HW

---

## Where we are: Last week

![](../week05/images/logreas_AFrame_2.gif)

 * "_Declarative_ programming languages ... are rather like logics in that programs declare statements that are known to be true and relationships between these and other statements."
 * "_Imperative_ programming languages ... state what shall be done in given conditions. They start with an initial state and an explicit set of instructions that describe the process that will unfold."

[Reference](http://cfpm.org/~bruce/logreas/logreas_7.html)

notes:
as a quick remidner, here are the definitions of declaritive vs. imperative

they are a little nebolous, but for reference we've been using mostly imperative programming for viz

you can think of imperative as a step-by-step reciepe and its usually what you'll run across in programming in Python

---

## Where we are: Last week

### bqplot

Our first engine, `bqplot`, is a Jupyter-based interactive plotting system.

It presents two principal interfaces:

1. `pyplot`-like interface, for making the transition from matplotlib easier
```#python
from bqplot import pyplot as bplt
bplt.figure(title='A Figure')
bplt.scatter(x_data, y_data)
bplt.show()
```
1. An object-oriented API for constructing interactive visualizations
```#python
scatter_chart = Scatter(x=x_data, y=y_data, scales={'x': x_sc, 'y': y_sc})
fig = Figure(marks=[scatter_chart], title='A Figure', axes=[x_ax, y_ax])
display(fig)
```

notes:
as covered last week (and the week before) bqplot is a new interface we are going to be using to make interactive plots

there *is* a matplotlib-like interface, but we will be using bqplot declaritively to get us ready to use vega-lite later on in the course

---

## Where we are: Last week

### bqplot introduction

Our first example will be a simple lineplot.
```#python
import bqplot
import numpy as np

# 1. data
x = np.arange(100)
y = np.random.random(100) + 5
# 2. scales
x_sc = bqplot.LinearScale()
y_sc = bqplot.LinearScale()
# 3. marks
lines = bqplot.Lines(x = x, y = y, scales = {'x': x_sc, 'y': y_sc})
# 4. sometimes interactive elements are defined around here
# 5. axis
ax_x = bqplot.Axis(scale = x_sc, label = 'X value')
ax_y = bqplot.Axis(scale = y_sc, label = 'Y value', orientation = 'vertical')

# finally: figure
fig = bqplot.Figure(marks = [lines], axes = [ax_x, ax_y])
fig
```

notes:
last week we covered this basic outline of how to make a plot in bqplot

first starting with defining the data (there can be data cleaning here as well)

then moving onto the scales -- are they linear or log? what about any color scales?

then we define the "marks" -- do you want a line plot or a bar chart? or a scatter plot?

around step #4 is where interactivity will be included with something along the lines of a .observe function

then we define axis -- like x/y axis but also color axis (colorbars)

finally, we put everything together as a figure and display that figure

---

## Where we are: Today

<img src="images/dataviz_map_thisweek.png">

notes: 

Today we'll continue with bqplot and work on building up dashboards

if we have time we'll also start talking about map projections this week (but we might only get to it next week)

---

## Today's Main Topics

 1. Interactivity and linked views
 1. More dashboarding
 1. Dashboards with maps
 1. Map projections (if we have time)

---

<br>
<br>
<br>

# TOPIC 1: Interactivity


---

## Interactivity

This week, we'll talk about some more basics principles of interactivity in
visualization.

What do you think of when you think of interactive visualizations?

---

## Interactivity: Parameters

<!-- .slide: data-background-image="images/brushlink_01.svg" data-background-size="80% auto" data-background-position="right 50% bottom 50%" -->

 * Point characteristics
 * Axis limits/bounds
 * Transform/scale

note: we'll think a little about different ways to manipulate each of these types of plot characteristics

---

## Interactivity: Parameters

<!-- .slide: data-background-image="images/brushlink_01.svg" data-background-size="80% auto" data-background-position="right 50% bottom 50%" -->

 * Point characteristics - Click-and-drag
 * Axis limits/bounds - Rectangle zoom
 * Transform/scale - Adjustment

---

## Interactivity: Linking & Brushing

<!-- .slide: data-background-image="images/brushlink_02.svg" data-background-size="80% auto" data-background-position="right 50% bottom 50%" -->

`data(variable1, variable2, variable3, variable4)`

note: here we are plotting a set of data that is a function of 4 variables.

For example, this could be the amount you are late to class as a function of (1) how much sleep you got, (2) how excited you are about the topic that day (3) how nervous you are about the topic that day and (4) how much of your homework the dog ate.

here we are plotting 2 2d plots of this dataset - were we know intuatively each point is represented both as a dot on the first graph *and* as a dot on the 2nd graph

---

## Interactivity: Linking & Brushing

<!-- .slide: data-background-image="images/brushlink_02.svg" data-background-size="80% auto" data-background-position="right 50% bottom 50%" -->

`data(variable1, variable2, variable3, variable4)`

`filter( variable2 > variable1 )`

note: now we are going to think about applying a simple filter, based around the first plot

we'll only show data where variable2 > variable1

---

## Interactivity: Linking & Brushing

<!-- .slide: data-background-image="images/brushlink_03.svg" data-background-size="80% auto" data-background-position="right 50% bottom 50%" -->

`data(variable1, variable2, variable3, variable4)`

`filter( variable2 > variable1 )`

note: lets draw a line where the demarkation of our filter would be

---

## Interactivity: Linking & Brushing

<!-- .slide: data-background-image="images/brushlink_04.svg" data-background-size="80% auto" data-background-position="right 50% bottom 50%" -->

`data(variable1, variable2, variable3, variable4)`

`filter( variable2 > variable1 )`

note: ... and lets take out all the data of both plots that has variable2 <= variable1

---

## Interactivity: Linking & Brushing

<!-- .slide: data-background-image="images/brushlink_05.svg" data-background-size="80% auto" data-background-position="right 50% bottom 50%" -->

note: we can also select regions in our linked view

---

## Interactivity: Linking & Brushing

<!-- .slide: data-background-image="images/brushlink_06.svg" data-background-size="80% auto" data-background-position="right 50% bottom 50%" -->

note: here are how these points are linked in the plot of variable3 vs variable4

---

## Interactivity: Linking & Brushing

<!-- .slide: data-background-image="images/brushlink_07.svg" data-background-size="80% auto" data-background-position="right 50% bottom 50%" -->

note: so when we select with our brush in the first plot we can show what is selected in the second plot

---

## Interactivity: Linking & Brushing with UFO data

![](images/durationAllPoints.png)

note: as a "practical" example, we can for example make cuts in things like the
duration of UFO sitings for all years

---

## Interactivity: Linking & Brushing with UFO data

![](images/durationAllPoints_p2.png)

note: we can select only the longest sitings

---

## Interactivity: Linking & Brushing with UFO data

![](images/durationLongPoints.png)

note: this is how this plot would now look

---

## Interactivity: Linking & Brushing with UFO data

![](images/mapAllPoints.png)

note: and then we can see how the map changes

this is our original

---

## Interactivity: Linking & Brushing with UFO data

![](images/mapLongPoints.png)

note: this is how this dataset looks now w/o the shortest duration ufo sitings

---

## Interactivity: Linking & Brushing with UFO data

As a dashboard:

<!-- .slide: class="two-floating-elements" -->

<div class="left">
  <img src="images/durationAllPoints.png">
</div>

<div class="right">
 <img src="images/mapAllPoints.png">
</div>

notes:
as a dashboard, this process would look something like this where we have the duration in seconds on the left "driving" changes in the lat/long points shown on the right


---

## Interactivity: Linking & Brushing with UFO data

As a dashboard:

<!-- .slide: class="two-floating-elements" -->

<div class="left">
  <img src="images/durationAllPoints_p2.png">
</div>

<div class="right">
 <img src="images/mapAllPoints.png">
</div>

notes:

our user would then select a threshold they wanted to cull the data by

---

## Interactivity: Linking & Brushing with UFO data

As a dashboard:

<!-- .slide: class="two-floating-elements" -->

<div class="left">
  <img src="images/durationAllPoints_p2.png">
</div>

<div class="right">
 <img src="images/mapLongPoints.png">
</div>

notes:

and those changes would propagete to our right-hand plot through a data "linkage", thus allowing our user to have multiple views of this dataset

---

<iframe width="1024" height="576"
src="https://www.youtube.com/embed/B7XoW2qiFUA?rel=0" frameborder="0"
allow="autoplay; encrypted-media" allowfullscreen></iframe>

[Link to video](https://www.youtube.com/embed/B7XoW2qiFUA)

note: here is one of the first examples of a "linked view" visualization machine.  We won't watch this whole video, but
if you are interested, they talk about how they can "interact" with different views

this was developed by SLAC (stanford linear accelerator)

prim9 = picturing, rotation, isolation & masking in up to 9 dimensions - for looking at multidimensional datasets
this was developed for particle data (so, like x,y,z and vx,vy,vz might be of interest)

*pause recording here!*

---

## Implementing This

Two main approaches to the selection process:

 * Concurrent filtering ("masks")
 * Index-based selection (i, j - based)

What are the pros and cons of each?

What are methods of showing "linked" and "brushed" data if you have:

 * Scatter plot
 * Histogram
 * Field / image plot

notes: 
hint -- we already discussed index based last class with the grid heatmap and the histogram plots

and we've done masking before with the filtering of images

---

<br>
<br>
<br>

# TOPIC 2: Dashboarding

---

## Recall: HW 6 this week

Build a dashboard for the license data.
 * Left component:
   * Grid heat map
   * Columns are License Type
   * Rows are the License Status 
   * Values are mean of the days between Effective Date and Expiration Date
 * Right component:
   * is a barplot/histogram
   * x is the year
   * y is median number of days between Effective Date and Expiration Date that year
 * These two should be linked so that you can select cells and that will update the right plot.
	
notes:
Hint for those in class -- check out pivot tables with pandas, it might get you close to where you want to be with filtering your data!

---

## Today's Python Programming:

Starting with these ideas, we'll progressively enhance.

 * Create heat maps of the sightings in the UFO dataset
 * Select based on location (do not use map marks yet)
 * Manually create "bins" for aggregation (**this is "pre-done" for us**)
 * Use different scales for dates, times, locations

We'll use these to build up a _dashboard_ for our data.

notes:
in the prep notebook, it is shown how the histogramming is done, however for timing purposes we'll just use a function

---

## Dashboards: Tableau
![](images/Tableau-Sample-Training-Dashboard-Original.png)

notes: so here is an example of a dashboard, I *think* from Tableau.  Here we see a linked view which
displays data in several different ways to give the user the ability to visualize what their data
means spatially (with the map & region bargraph) and temporally (with the calendar/bar view at the bottom)

---

## Dashboards: Glueviz
![](images/histogram.png)

note: aside, there are opensource dashboarding type software, this is an example of glueviz that is
used a lot in astronomy and built on python

This is an example of binning light (dark or bright pixels) in an image of a star forming region (I think),
and linking this with a histogram which responds to a selection tool (in red) in the image.

---

## Dashboards: Building our own in Python

Why bother?

notes: so, given that there is dashboarding software out there, why would be bother going through the difficulty of doing it ourselves?

---

## Dashboards: Building our own in Python

Why bother?
 * Understand choices about data formatting/missing data

notes: the first reason is that we can learn a bit about what choices we make for "messy" data

---

## Dashboards: Building our own in Python

Why bother?
 * Understand choices about data formatting/missing data
 * Understand necessary data transformations

notes: next, we can learn a bit about how data is transformed to make it dash-boardable

---

## Dashboards: Building our own in Python

Why bother?
 * Understand choices about data formatting/missing data
 * Understand necessary data transformations
 * Understand data links

notes: also we want to understand the ways we can actually link parts of our data together -- what choices do we make to link data like this?

if we use dashboarding software, it can often obfuscate a lot of of these aspects

---

## Dashboards: Building our own in Python

# TOPIC 3: To Python for an intro to map dashboards!

notes: today we will get more experience building up these sorts of interfaces ourselves!
