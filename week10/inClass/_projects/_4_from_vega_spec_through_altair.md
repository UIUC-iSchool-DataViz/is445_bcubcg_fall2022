---
name: Vega-specs to Saved JSONs with Altair
tools: [Python, HTML, vega-lite]
image: assets/pngs/vegaspecthroughaltair.png
description: Convert vega-specs to JSON with Altair in Python
custom_js:
  - vega.min
  - vega-lite.min
  - vega-embed.min
  - justcharts
---


# From Vega-Specs to JSON with Altair in Python

We can try first with our simplest "chart1" example from our prep notebook:

```
<vegachart schema-url="{{ site.baseurl }}/assets/json/chart1.json" style="width: 100%"></vegachart>
```

<vegachart schema-url="{{ site.baseurl }}/assets/json/chart1.json" style="width: 100%"></vegachart>

Note that we had to save w/o the container width here (so changing the width parameter does nothing):

<vegachart schema-url="{{ site.baseurl }}/assets/json/static_mobility.json" style="width: 100%"></vegachart>

Now with interactivity:
<vegachart schema-url="{{ site.baseurl }}/assets/json/dashboard_mobility.json" style="width: 100%"></vegachart>

Neat!  But still, there are some weird things with this side-by-side concatination thing.

<div class="left">
{% include elements/button.html link="https://github.com/vega/vega-datasets/blob/master/data/barley.json" text="The Data" %}
</div>

<div class="right">
{% include elements/button.html link="https://github.com/UIUC-iSchool-DataViz/is445_bcubcg_fall2022/blob/main/week11/prep_notebook_week11.ipynb" text="The Analysis" %}
</div>

