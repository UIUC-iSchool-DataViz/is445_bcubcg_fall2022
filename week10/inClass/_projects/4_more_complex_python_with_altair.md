---
name: Vega-lite Plots with Python Analysis
tools: [Python, HTML, vega-lite]
image: assets/pngs/pythonanalysisvegaplot.png
description: Examples using Python for analysis, and vega-lite for interactive, online plotting.
custom_js:
  - vega.min
  - vega-lite.min
  - vega-embed.min
  - justcharts
---

# Introduction

Today, we'll be working through some more complex examples that use Python for data analysis and transformation, and vega-lite as the output engine to save to our Jekyll pages.

# 1. Data transformations with the buildings dataset

We start the notebook with a few data manipulations to end up with a figure that shows the max and min square footage as a function of year aquired:

<vegachart schema-url="{{ site.baseurl }}/assets/json/buildings_sqft.json" style="width: 100%"></vegachart>


### Optional things? Maybe?  We might get to it?

<vegachart schema-url="{{ site.baseurl }}/assets/json/buildings_sqft_stats.json" style="width: 100%"></vegachart>

# 2. More complex Data Transforms (and mappable data) with the Corgi's dataset

We went through the steps to make a world map with responsive dot sizes for the number of corgis born as a function of year:

<vegachart schema-url="{{ site.baseurl }}/assets/json/corgis_dotchart_world.json" style="width: 100%"></vegachart>

We note that there are some artifacts, but we can fix this with some interpolation:

<vegachart schema-url="{{ site.baseurl }}/assets/json/corgis_dotchart_world_smooth.json" style="width: 100%"></vegachart>


Note that without context, this chart is meaningless -- we have to be sure to add in context in words (and/or with other plots) about what this map is showing.

Finally, let's make a choropleth plot with the corgi data:

<vegachart schema-url="{{ site.baseurl }}/assets/json/corgis_choro_world.json" style="width: 100%"></vegachart>


<div class="left">
{% include elements/button.html link="https://github.com/UIUC-iSchool-DataViz/is445_bcubcg_fall2022/blob/main/data/mobility.csv" text="The Data" %}
</div>

<div class="right">
{% include elements/button.html link="https://github.com/UIUC-iSchool-DataViz/is445_bcubcg_fall2022/blob/main/week11/prep_notebook_week11.ipynb" text="The Analysis" %}
</div>

