---
name: Vega-lite Plot, Different ways
tools: [HTML, vega-lite]
image: assets/pngs/barley.png
description: Different ways to include vega-lite plots.
custom_js:
  - vega.min
  - vega-lite.min
  - vega-embed.min
  - justcharts
---


# 1. From vega-editor


Starting from the [vega-editor](https://vega.github.io/editor) we can copy specifications *BUT we HAVE TO make sure we put in the full (and raw!) data link* from the [vega-lite datasets](https://github.com/vega/vega-datasets/tree/master/data). 

```
<vegachart schema-url="{{ site.baseurl }}/assets/json/barley.json" style="width: 100%"></vegachart>
```

<vegachart schema-url="{{ site.baseurl }}/assets/json/barley.json" style="width: 100%"></vegachart>

We can even include interactive examples *making sure to include the full raw data link*:

<vegachart schema-url="{{ site.baseurl }}/assets/json/unemploy.json" style="width: 100%"></vegachart>

We can also move specifications from [Starboard](https://starboard.gg/nb/nDgjr30) into the vega-editor as well:

<vegachart schema-url="{{ site.baseurl }}/assets/json/fromstarboard.json" style="width: 100%"></vegachart>



<!-- these are written in a combo of html and liquid --> 

<div class="left">
{% include elements/button.html link="https://github.com/vega/vega/blob/main/docs/data/cars.json" text="The Data" %}
</div>

<div class="right">
{% include elements/button.html link="https://github.com/jnaiman/online_cv_public/blob/main/python_notebooks/test_generate_plots.ipynb" text="The Analysis" %}
</div>

