---
layout: week
visible: true
icon: undraw_Around_the_world_re_n353.svg
notitle: true
examples:
  - filename: inClass_week07.ipynb
    type: ipynb
    title: In class notebook
    description: Placeholder for in class coding
  - filename: prep_notebook_week07.ipynb
    type: ipynb
    title: Prep Notebook, Week 7
    description: Prep notebook for this week, Part 1
  - filename: spring2019_prep_notebook_week07_part1.ipynb
    type: ipynb
    title: spring2019_prep_notebook_week07_part1.ipynb
  - filename: spring2019_prep_notebook_week07_part2.ipynb
    type: ipynb
    title: spring2019_prep_notebook_week07_part2.ipynb
  - filename: spring2019_prep_notebook_week07_part3.ipynb
    type: ipynb
    title: spring2019_prep_notebook_week07_part3.ipynb
data:
  - filename: ufo-scrubbed-geocoded-time-standardized-00.csv
    type: dataLink
    title: The UFO Sitings Dataset (13Mb)
    description: Data about world wide reports of UFO sitings
    link: https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445_bcubcg_fall2022/main/data/ufo-scrubbed-geocoded-time-standardized-00.csv
  - filename: total_export.csv
    type: dataLink
    title: State export data (8Kb)
    description: Data about exports from each state
    link: https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445_bcubcg_fall2022/main/data/total_export.csv
  - filename: market_map_data.csv
    type: dataLink
    link: https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445_bcubcg_fall2022/main/data/market_map_data.csv
    title: Surgery Charges Dataset (37Mb)
    description: Surgery charges in different states
library:
  - filename: states_utils.py
    type: library
    title: State export utilities (states_utils.py)
    description: Python library, save to notebook folder or modify your path if you know how to do that
  - filename: us_state_abbrev.py
    type: library
    title: US State abbreviations (us_state_abbrev.py)
    description: Python library, save to notebook folder or modify your path if you know how to do that
---

# Maps, maps and more maps

We will start thinking about maps & map projection, both in `bqplot` and `matplotlib` and with `geopandas`+`contextily`.  We'll continue this week with building dashboards of mappable data.

<!-- ## Downloads

### Data:

 * <a href="https://uiuc-ischool-dataviz.github.io/spring2019online/week04/data/ufo-scrubbed-geocoded-time-standardized-00.csv" download>The UFO Sitings Dataset (13Mb) - ufo-scrubbed-geocoded-time-standardized-00.csv</a>
 * <a href='total_export.csv' download>State export data (8Kb) - total_export.csv</a>
 * <a href="market_map_data.csv" download>Backup: Surgery Charges Dataset (37Mb) - market_map_data.csv</a>
 * <a href="https://uiuc-ischool-dataviz.github.io/spring2019online/week08/data/data_tohoku_norm_transpose.csv" download>Earthquake sensor data (59Mb) - data_tohoku_norm_transpose.csv</a>
 * <a href="https://uiuc-ischool-dataviz.github.io/spring2019online/week08/data/location.txt" download>Earthquake locations data (12Kb) - location.txt</a>

