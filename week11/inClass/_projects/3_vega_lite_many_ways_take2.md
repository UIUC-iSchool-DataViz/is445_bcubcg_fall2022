---
name: Take2 - Vega-lite plots in Jekyll, Multiple Ways
tools: [Python, HTML, vega-lite, Jekyll]
image: assets/pngs/vegaMultipleWays.png
description: Ways to get vega-lite plots in our webpages, day 2.
custom_js:
  - vega.min
  - vega-lite.min
  - vega-embed.min
  - justcharts
---


# Example Vega-lite Specs, Multiple Ways to Include

## Directly From the Vega Editor

The following plots below are coming directly from modifying the [vega-lite editor](https://vega.github.io/editor).

<vegachart schema-url="{{ site.baseurl }}/assets/json/fromvegaeditor.json" style="width: 100%"></vegachart>

<vegachart schema-url="{{ site.baseurl }}/assets/json/interactivefromvegaeditor.json" style="width: 100%"></vegachart>

<vegachart schema-url="{{ site.baseurl }}/assets/json/interactive2vegaeditor.json" style="width: 100%"></vegachart>

How this works is that in the vega-editor I can generate a specification as shown in the screenshot below:

![Screenshot of vega-editor]({{site.baseurl}}assets/pngs/examplevegaeditor.png)

<!-- these are written in a combo of html and liquid --> 

<div class="left">
{% include elements/button.html link="https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445_bcubcg_fall2022/main/data/mobility.csv" text="The Data" %}
</div>

<div class="right">
{% include elements/button.html link="https://github.com/UIUC-iSchool-DataViz/is445_bcubcg_fall2022/blob/main/week11/inClass_week11.ipynb" text="The Analysis" %}
</div>

