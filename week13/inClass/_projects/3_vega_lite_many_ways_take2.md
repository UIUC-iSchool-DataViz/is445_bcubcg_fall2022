---
name: Take 2 - vega-lite, many ways
tools: [Python, HTML, vega-lite, Jekyll]
image: assets/pngs/vegaliteTake2.png
description: Multiple ways to use vega-lite in our Jekyll page.
custom_js:
  - vega.min
  - vega-lite.min
  - vega-embed.min
  - justcharts
---

# General ways to include vega-lite plots

Order of operations:

1. generate a JSON specification (from somewhere -- vega-editor, 
Altair, etc)
1. save the JSON specification into `assets/json`
1. include the "vega-lite tag" with the following example code:

```
<vegachart schema-url="{{ site.baseurl }}/assets/json/fromvegaeditor.json" style="width: 100%"></vegachart>
```

## 1. Including vega-lite plots directly from the editor

If we are copying from the [vega-editor](https://vega.github.io/editor) we want to make sure we have the full data link.  We can find that by Googling for "vega datasets github" which takes us [right here](https://github.com/vega/vega-datasets/tree/next/data) and we can search for our dataset.

Make sure it is the "raw" form of the data!

<vegachart schema-url="{{ site.baseurl }}/assets/json/interactivescatter_fulllink.json" style="width: 100%"></vegachart>


## 2. How to use vega-lite specifications from other sources (i.e. Starboard)

Starting with a static histogram plot with the Mobility dataset from a [Starboard Notebook from Week 10](https://starboard.gg/nb/nrSZM7g).

<vegachart schema-url="{{ site.baseurl }}/assets/json/mobility_hist.json" style="width: 100%"></vegachart>

## 3. Limitations of just copying from Starboard -- how to fix some of this with Altair

Side by side, from Starboard (no interactivity):

<vegachart schema-url="{{ site.baseurl }}/assets/json/sidebyside.json" style="width: 100%"></vegachart>

Including a `brush` selection and a `transform_filter` in our dashboard for interactivity:

<vegachart schema-url="{{ site.baseurl }}/assets/json/dashboard_mobility_from_dict.json" style="width: 100%"></vegachart>


## 4. Making the plot fully in Altair with data stored online

Making a quick scatter plot:

<vegachart schema-url="{{ site.baseurl }}/assets/json/scatters_mobility.json" style="width: 100%"></vegachart>

Remake dashboard, all in Altair:

<vegachart schema-url="{{ site.baseurl }}/assets/json/dashboard_all_in_altair.json" style="width: 100%"></vegachart>



## 5. Making plot fully in Altair with local data

We did a couple of things, namely, we used a local version of the mobility dataset, and then we *subsetted* that data set so that it was the smallest version of the data to pass with our specification.

<vegachart schema-url="{{ site.baseurl }}/assets/json/dashboard_all_in_altair_subset.json" style="width: 100%"></vegachart>


<!-- these are written in a combo of html and liquid --> 

<div class="left">
{% include elements/button.html link="https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445_bcubcg_fall2022/main/data/mobility.csv" text="The Data" %}
</div>

<div class="right">
{% include elements/button.html link="https://github.com/UIUC-iSchool-DataViz/is445_oauoag_fall2022/blob/main/week11/inClass_week11.ipynb" text="The Analysis" %}
</div>

