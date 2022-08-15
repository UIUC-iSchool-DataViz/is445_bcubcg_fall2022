---
layout: week
visible: true
icon: undraw_cohort_analysis_stny.svg
notitle: true
examples:
  - filename: prep_notebook_week04.ipynb
    type: ipynb
    title: Prep Notebook, Week 4
    description: Prep notebook for this week
  - filename: inClass_week04.ipynb
    type: ipynb
    title: In class notebook, Week 4
    description: Prep notebook for this week
  - filename: fall2019_prep_notebook_furtherExamples_01.ipynb
    type: ipynb
    title: fall2019_prep_notebook_furtherExamples_01.ipynb
    description: Extra notebook from 2019 class
  - filename: fall2019_prep_notebook_furtherExamples_02.ipynb
    type: ipynb
    title: fall2019_prep_notebook_furtherExamples_02.ipynb
    description: Extra notebook from 2019 class
  - filename: fall2019_prep_notebook_furtherExamples_03.ipynb
    type: ipynb
    title: fall2019_prep_notebook_furtherExamples_03.ipynb
    description: Extra notebook from 2019 class
  - filename: spring2019_prep_notebook_furtherExamples_week03.ipynb
    type: ipynb
    title: spring2019_prep_notebook_furtherExamples_week03.ipynb
  - filename: spring2019_prep_notebook_week03_part1.ipynb
    type: ipynb
    title: spring2019_prep_notebook_week03_part1.ipynb
  - filename: spring2019_prep_notebook_week03_part2.ipynb
    type: ipynb
    title: spring2019_prep_notebook_week03_part2.ipynb
data:
  - filename: building_inventory.csv
    type: dataOtherWeek
    title: Buildings dataset
    description: Illinois buildings dataset
    week: week03
  - filename: michigan_lld.flt
    type: dataLink
    title: Michigan Depth Map (86Mb)
    description: Measurments taken from around Lake Michigan (https://www.ngdc.noaa.gov/mgg/greatlakes/michigan.html)
    link: https://uiuc-ischool-dataviz.github.io/spring2019online/week05/data/michigan_lld.flt
  - filename: single_dicom.h5
    type: dataLink
    title: Brain Scan (72Mb)
    description: MRI scan of a brain
    link: https://uiuc-ischool-dataviz.github.io/spring2019online/week05/data/single_dicom.h5
library:
  - filename: palette_colors.py
    type: library
    title: Palette Colors (palette_colors.py)
    description: Python library, save to notebook folder or modify your path if you know how to do that
---

# Types of Viz and Choosing Colors

This week, we will cover a bit about colors, and more about data transformations, and how we can
choose colors and transforms to better suit our data.

We also did some basics of Pandas last week and we'll continue this week.

Note there are a variety of notebooks from previous iterations of this course listed under the *Materials* subsection of today's lecture.  The "furtherExamples" notebooks are just there as reference, we will not be going through them by hand.

<!-- ## Downloads

### Data:

 * <a href="https://uiuc-ischool-dataviz.github.io/spring2019online/week02/building_inventory.csv" download>Building Inventory CSV file - building_inventory.csv</a>
 * <a href="https://uiuc-ischool-dataviz.github.io/spring2019online/week05/data/michigan_lld.flt" download>Michigan Depth Map (86Mb) - michigan_lld.flt</a>
 * <a href="https://uiuc-ischool-dataviz.github.io/spring2019online/week05/data/single_dicom.h5" download>Brain Scan (72Mb) - single_dicom.h5</a>
 -->

<!-- ### Python external libraries

Make sure you save these in the same directory as your jupyter notebook is running in!

 * <a href="palette_colors.py" download>Palette Colors (palette_colors.py) - save to notebook folder or modify your path if you know how to do that</a>
 -->


## References

 * <a href="http://jonathansoma.com/lede/algorithms-2017/classes/fuzziness-matplotlib/understand-df-plot-in-pandas/">Pandas vs. Matplotlib</a>
 * <a href="https://github.com/jnaiman/IS-452AO-Fall2019/blob/master/Lectures/Week-09-Dictionaries.ipynb">IS452's Dictionary week</a>
 * Colors: <a href="https://www.rapidtables.com/web/color/RGB_Color.html">RGB color triplets</a>
 * While we won't be using <a href="https://wholetale.org/">Whole Tale</a> for this lecture, it was used for the last iteration of this course and you should feel free to go through the code walk-throughs presented there by Matt Turk - just search for "IS590" under the <a href="https://dashboard.wholetale.org/browse">Browse Tales</a> header.

## Optional Reading List

 1. VAD, Ch. 10: Map Color and Other Channels 
 2. <a href="https://serialmentor.com/dataviz/color-basics.html">FDV, Ch. 4: Color scales</a> 
 3. VAD, Ch. 5: Marks and Channels 
 4. <a href="https://www.csc2.ncsu.edu/faculty/healey/PP/">Perception in Visualization (pay extra attention to the parts about color)</a>  
 5. <a href="https://jiffyclub.github.io/palettable/#documentation">Palettable Docs</a>
