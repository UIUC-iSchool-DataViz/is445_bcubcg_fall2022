---
title: Lecture 10 extras - more with Vega-lite
layout: lecture
description: >-
 More with vega-lite
date: 2022-10-25
include_vega: true
setup_script: setup_script.js
---

<br />
<br />

# A few more notes about vega-lite if we have time

---

## The vega-lite View API

The [`View` API](https://vega.github.io/vega/docs/api/view/#view_insert) in
vega-lite (rather, vega) is how we manipulate and change data.  This can be
done by constructing a `changeset`, appending operations to that changeset, and
then executing that changeset on the `view` of our embedded visualization.

```javascript
var cs = vega.changeset()
          .remove( function(t) {
              return t.CIRCULATION < 10000
          });
embedded.then( function(res) {
  res.view.change('table', cs).run();
});
```

This will update the data table named `'table'` with everything "queued up" in
the `changeset` object `cs`.

---

## vega-lite: insert example

```json
  {
    "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
    "description": "A scatterplot",
    "data": {"name": "table",
             "values": [ {"x": 1.0, "y": 2.0},
                         {"x": 2.0, "y": 1.0},
                         {"x": 3.0, "y": 9.0},
                         {"x": 4.0, "y": 8.0},
                         {"x": 5.0, "y": 6.0} ] },
    "mark": "point",
      "encoding": {
        "x": {"field": "x","type": "quantitative"},
        "y": {"field": "y","type": "quantitative"}
      }
  }
```

<div id="vis2"></div>

---

## vega-lite: insert example

We can add elements to our dataset with the `insert` function.  This takes an
array of data tuples, like those already included, and adds them to the data
being visualized.

```javascript
var cs = vega.changeset()
          .insert( [
            {'x': 1.0, 'y': 10.0},
            {'x': 5.0, 'y': 1.3},
            {'x': 2.1, 'y': 0.7}
          ]);
embedded3.then( function(res) {
  res.view.change('table', cs).run();
```

---

## vega-lite: insert example

We do this by affixing an event handler, in this case to a button and the event
`click`.

```javascript
document.getElementById("button3")
  .addEventListener("click", 
    function onButtonClick(event) {
  });
```

<div id="vis3"></div>

<button id="button3">Click to insert</button>

---

## vega-lite: remove

Similarly, we can *remove* data points by supplying a function that is
evaluated on each of the data tuples.

```javascript
var cs = vega.changeset()
          .insert( [
            {'x': 1.0, 'y': 10.0},
            {'x': 5.0, 'y': 1.3},
            {'x': 2.1, 'y': 0.7}
            ])
          .remove( function(t) {
            return t.x < t.y;
          });
embedded4.then( function(res) {
  res.view.change('table', cs).run();
```

---

## vega-lite: remove
  
<div id="vis4"></div>
<button id="button4">Click to insert and remove</button>

(Wait, what happened ...?)

---

