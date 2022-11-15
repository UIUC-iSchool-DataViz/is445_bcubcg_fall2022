---
name: Buildings & Corgis all in Altair
tools: [Python, HTML, vega-lite, Jekyll, Altair]
image: assets/pngs/vegaliteTake2.png
description: More Altair-only, local-data plots.
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



<!-- these are written in a combo of html and liquid --> 

<div class="left">
{% include elements/button.html link="https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445_bcubcg_fall2022/main/data/mobility.csv" text="The Data" %}
</div>

<div class="right">
{% include elements/button.html link="https://github.com/UIUC-iSchool-DataViz/is445_oauoag_fall2022/blob/main/week11/inClass_week11.ipynb" text="The Analysis" %}
</div>

