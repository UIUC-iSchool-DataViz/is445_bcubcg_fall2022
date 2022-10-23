---
name: Vega-lite Plots, 4 ways
tools: [Python, HTML, vega-lite]
image: assets/pngs/fromvegaeditor.png
description: Explore several ways to get plots from vega-lite and Python into your Jekyll Projects
custom_js:
  - vega.min
  - vega-lite.min
  - vega-embed.min
  - justcharts
---


# 1. From the vega-editor

If we start from [this simple vega-example](https://vega.github.io/vega-lite/examples/stacked_bar_h.html) and [open it in the vega-editor](https://vega.github.io/editor/#/examples/vega-lite/stacked_bar_h) we can export from the vega-lite editor.

If we click the `Export` button in the upper tool bar, we see that we have a few options for how to export visualiztions.

![]({{site.baseurl}}/assets/pngs/vegaeditorexample.png)

For this to work, you need to make sure that you have the full *raw* URL for the dataset from the [list of vega-datasets](https://github.com/vega/vega-datasets/tree/master/data).  Double check that it is the raw-data link!


Note here to display this image I had to include a Liquid link for the `site.baseurl`:

```
![]({{site.baseurl}}/assets/pngs/vegaeditorexample.png)
```

We can save with JSON (config file un-checked) using the middle upper panel's interface:

![]({{site.baseurl}}/assets/pngs/fullvegaeditorsavejson.png)


We can then save the downloaded .json file in the `assets/jsons/` folder in our main Jekyll page directory.

Once we have that we can link using `vegachart` as per usual:

```
<vegachart schema-url="{{ site.baseurl }}/assets/json/direct_from_editor.json" style="width: 100%"></vegachart>
```

<vegachart schema-url="{{ site.baseurl }}/assets/json/direct_from_editor.json" style="width: 100%"></vegachart>


# 2. From Vega-Specs to JSON with Altair in Python

We start from just copying the specification from our [Starboard notebook](https://starboard.gg/jnaiman/inClass_week12_spring2022-nZa79A6) of previous weeks using the `from_dict` function in Altair.  With some judicious use of adding/subtracting quotation marks (we have to be a bit more careful with these in Python) we can recreate a simple histogram showing the count of records in our [Mobility dataset](https://github.com/UIUC-iSchool-DataViz/is445_bcubcg_fall2022/blob/main/data/mobility.csv) as a function of state:

<vegachart schema-url="{{ site.baseurl }}/assets/json/chart1.json" style="width: 100%"></vegachart>

We did this by saving our Altair chart as a JSON file in our assets folder in this Jekyll page's repository and embedding it using the `vegachart` plug in HTML tag:
```
<vegachart schema-url="{{ site.baseurl }}/assets/json/chart1.json" style="width: 100%"></vegachart>
```



# 3. Dashboard Building

For more complex layouts and to support some interactivity and linking of data, we can start to making some of our plots more "Altair friendly".  For example, breaking our two dashboard plots from our prior [Starboard notebook](https://starboard.gg/jnaiman/inClass_week12_spring2022-nZa79A6) into to charts and then using the `Hconcat` function in Altair to put them side-by-side:

<vegachart schema-url="{{ site.baseurl }}/assets/json/static_mobility.json" style="width: 100%"></vegachart>

Note that we had to save w/o the container width here (so changing the width parameter does nothing).  

<!-- If I want to have some control over the size, I can put this `vegachart` tag within an HTML `div` tag:

<div width="100px">
<vegachart schema-url="{{ site.baseurl }}/assets/json/static_mobility.json" style="width:600px"></vegachart>
</div>
-->


Now with interactivity:
<vegachart schema-url="{{ site.baseurl }}/assets/json/dashboard_mobility.json" style="width: 100%"></vegachart>

Neat!  But still, there are some weird things with this side-by-side concatination thing.

Let's re-make this plot once again, only using Altair syntax (not translating from vega-lite with `from_dict`).


# 4. Use Altair to make the chart

We first started making a scatter plot with Altair:
<vegachart schema-url="{{ site.baseurl }}/assets/json/population_scatter.json" style="width:600px"></vegachart>

And then we re-did the Mobility Dashboard, but this time using all Altair-style calls:
<vegachart schema-url="{{ site.baseurl }}/assets/json/altair_mobility_dashboard.json" style="width: 100%"></vegachart>

# 5. Python Analysis + Altair Plotting

Finally, we can do all of the data transformations and analysis in Python and then use Altair to export the cleaned/transformed data.

<vegachart schema-url="{{ site.baseurl }}/assets/json/altair_mobility_data_dashboard.json" style="width: 100%"></vegachart>

This essentially looks the same as what we have above in section #4!  That is because it is basically the same thing, however, now the data is stored *with* the file.  This allows us to potentially do some data manipulations in Python and then save the vega-lite plot with Altair for plotting.



<div class="left">
{% include elements/button.html link="https://github.com/UIUC-iSchool-DataViz/is445_bcubcg_fall2022/blob/main/data/mobility.csv" text="The Data" %}
</div>

<div class="right">
{% include elements/button.html link="https://github.com/UIUC-iSchool-DataViz/is445_bcubcg_fall2022/blob/main/week11/prep_notebook_week11.ipynb" text="The Analysis" %}
</div>

