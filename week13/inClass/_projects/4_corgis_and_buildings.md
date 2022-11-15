---
name: More with Altair - Corgis and Buildings
tools: [Python, HTML, vega-lite, Jekyll, Altair]
image: assets/pngs/vegaliteTake2.png
description: Fancy stuff with Altair!
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

## 1. Line plots with Altair and Buildings Dataset

### I. Double line plot with "layers" in Altair

<vegachart schema-url="{{ site.baseurl }}/assets/json/buildings_sqft.json" style="width: 100%"></vegachart>

Some (almost) "for free" interactivity that we get is pan zoom:

<vegachart schema-url="{{ site.baseurl }}/assets/json/buildings_sqft_panzoom.json" style="width: 100%"></vegachart>

### II. Multiple stats with the "melt" operation in Pandas

<vegachart schema-url="{{ site.baseurl }}/assets/json/buildings_stats_dropdown.json" style="width: 100%"></vegachart>




<!-- these are written in a combo of html and liquid --> 

<div class="left">
{% include elements/button.html link="https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445_bcubcg_fall2022/main/data/corgs_per_country_over_time_columns_2020.csv" text="The Data" %}
</div>

<div class="right">
{% include elements/button.html link="https://github.com/UIUC-iSchool-DataViz/is445_oauoag_fall2022/blob/main/week12/inClass_week12.ipynb" text="The Analysis" %}
</div>

