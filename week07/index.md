---
layout: week
visible: true
icon: undraw_metrics_gtu7.svg
notitle: true
examples:
  - filename: inClass_week07.ipynb
    type: ipynb
    title: In Class Notebook, Week 7
    description: In class notebook
  - filename: prep_notebook_week07_part1.ipynb
    type: ipynb
    title: Prep Notebook, Week 7, Part 1
    description: Prep notebook for this week, Part 1
  - filename: prep_notebook_week07_part2.ipynb
    type: ipynb
    title: Prep Notebook, Week 7, Part 2
    description: Prep notebook for this week, Part 2
  - filename: spring2019_prep_notebook_week06_part1.ipynb
    type: ipynb
    title: spring2019_prep_notebook_week06_part1.ipynb
  - filename: spring2019_prep_notebook_week06_part2.ipynb
    type: ipynb
    title: spring2019_prep_notebook_week06_part2.ipynb
  - filename: spring2019_prep_notebook_week06_part3.ipynb
    type: ipynb
    title: spring2019_prep_notebook_week06_part3.ipynb
data:
  - filename: ufo-scrubbed-geocoded-time-standardized-00.csv
    type: dataLink
    title: The UFO Sitings Dataset (13Mb)
    description: Data about world wide reports of UFO sitings
    link: https://uiuc-ischool-dataviz.github.io/spring2019online/week04/data/ufo-scrubbed-geocoded-time-standardized-00.csv
  - filename: market_map_data.csv
    type: data
    title: Surgery Charges Dataset (37Mb)
    description: Surgery charges in different states
  - filename: data_tohoku_norm_transpose.csv
    type: dataLink
    title: Earthquake sensor data (59Mb)
    description: Earthquake sensor data from the earthquake from the Tohoku earthquake in 2011
    link: https://uiuc-ischool-dataviz.github.io/spring2019online/week08/data/data_tohoku_norm_transpose.csv
  - filename: location.txt
    type: dataLink
    title: Earthquake locations data (12Kb)
    description: Locations of earthquake sensors
    link: https://uiuc-ischool-dataviz.github.io/spring2019online/week08/data/location.txt
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

# More with dashboards & Map Viz

We will start thinking about maps & map projection, both in `bqplot` and `matplotlib`.  We'll start this week with building dashboards of mappable data.

<!-- ## Downloads

### Data:

 * <a href="https://uiuc-ischool-dataviz.github.io/spring2019online/week04/data/ufo-scrubbed-geocoded-time-standardized-00.csv" download>The UFO Sitings Dataset (13Mb) - ufo-scrubbed-geocoded-time-standardized-00.csv</a>
 * <a href='total_export.csv' download>State export data (8Kb) - total_export.csv</a>
 * <a href="market_map_data.csv" download>Backup: Surgery Charges Dataset (37Mb) - market_map_data.csv</a>

#### This might not be used until next week:
 * <a href="https://uiuc-ischool-dataviz.github.io/spring2019online/week08/data/data_tohoku_norm_transpose.csv" download>Earthquake sensor data (59Mb) - data_tohoku_norm_transpose.csv</a>
 * <a href="https://uiuc-ischool-dataviz.github.io/spring2019online/week08/data/location.txt" download>Earthquake locations data (12Kb) - location.txt</a>


### Resources:

 * <a href='states_utils.py' download>State export utilities (Python library) - states_utils.py</a>
 * <a href='us_state_abbrev.py' download>US State abbreviations (Python library) - us_state_abbrev.py</a>
-->

## Optional reading list

 1. VAD Ch. 8.1-8.3: Arrange Spatial Data 
 2. VAD Ch. 11.1-11.5: Manipulate View 
 3. <a href="https://serialmentor.com/dataviz/geospatial-data.html">FDV, Ch. 15: Visualizing geospatial data</a>
